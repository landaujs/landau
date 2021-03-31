import Reconciler from "react-reconciler";
import { createContext } from "react";
import _ from "lodash";
import fs from "fs";
import io from "@jscad/io";
import modeling from "@jscad/modeling";
import stlSerializer from "@jscad/stl-serializer";

const DEFAULT_CACHE_DIR = ".render_cache";

const debug = require("debug")("landau-renderer");

const rendererContext = createContext({ cacheDir: DEFAULT_CACHE_DIR });

const createInstance = (type, props, ...args) => {
  const modelingOp =
    _.get(modeling, `colors.${type}`) ||
    _.get(modeling, `primitives.${type}`) ||
    _.get(modeling, `booleans.${type}`) ||
    _.get(modeling, `expansions.${type}`) ||
    _.get(modeling, `extrusions.${type}`) ||
    _.get(modeling, `hulls.${type}`) ||
    _.get(modeling, `modifiers.${type}`) ||
    _.get(modeling, `transforms.${type}`);
  debug("createInstance", type, props);
  if (!modelingOp) {
    throw new Error(`Unrecognized instance type ${type}`);
  }
  return {
    type,
    props,
    fn: modelingOp,
    children: [],
  };
};

const renderPackage = (pkg, outputPath, cacheDir, cacheable) => {
  // TODO: proper args
  debug("props", pkg.props);
  const renderedChildren = pkg.children.map((child) => {
    return renderPackage(child);
  });
  if (pkg.fn.length === 1) {
    return pkg.fn(pkg.props, ...renderedChildren);
  } else {
    return pkg.fn(...renderedChildren);
  }
};

const HostConfig = {
  now: Date.now,
  supportsMutation: true,
  getRootHostContext: (root) => {
    debug("getRootHostContext", root);
    return {
      MARKER: "HOST CONTEXT",
      outputPath: root.path,
      cacheDir: root.cacheDir || DEFAULT_CACHE_DIR,
    };
  },
  getChildHostContext: (parentContext, fiberType, rootInstance) => {
    debug("getChildHostContext", parentContext, rootInstance);
    // return { MARKER: "CHILD HOST CONTEXT", outputPath: rootInstance.path };
    return { MARKER: "CHILD HOST CONTEXT" };
  },
  getPublicInstance: (instance) => instance,
  shouldSetTextContent: function (...args) {
    // debug('shouldSetTextContent', ...args)
    return false;
  },
  createInstance,
  createTextInstance: function (...args) {
    debug("createTextInstance", ...args);
  },
  appendInitialChild: (parent, child) => {
    parent.children.push(child);
  },
  appendChildToContainer: (container, child, ...args) => {
    const outputPath = container.path;
    const cacheDir = container.cacheDir || DEFAULT_CACHE_DIR;
    debug("renderPackage", child, outputPath, ...args);
    const outputGeometry = renderPackage(child, outputPath, cacheDir, true);
    debug("geometry", outputGeometry);
    if (outputPath) {
      const rawData = io.solidsAsBlob(outputGeometry, { format: "stl" });
      // const rawData = stlSerializer.serialize({binary: true}, outputGeometry);
      fs.writeFileSync(outputPath, rawData.asBuffer());
    }
  },
  finalizeInitialChildren: function (...args) {
    return false;
  },

  prepareForCommit: (container) => {},
  resetAfterCommit: (container) => {},
};

const roots = new Map();
const reconcilerInstance = Reconciler(HostConfig);

const render = (element, container, callback) => {
  // const cacheDir = container.cacheDir || DEFAULT_CACHE_DIR;
  // fs.mkdirSync(cacheDir, { recursive: true });
  // Hack to modify context
  // rendererContext._currentValue.cacheDir = cacheDir;
  // rendererContext._currentValue2.cacheDir = cacheDir;

  const isAsync = false; // Disables async rendering
  let root = roots.get(container);
  if (!root) {
    root = reconcilerInstance.createContainer(container, isAsync); // Creates root fiber node.
    roots.set(container, root);
  }

  const parentComponent = null; // Since there is no parent (since this is the root fiber). We set parentComponent to null.
  reconcilerInstance.updateContainer(element, root, parentComponent, callback); // Start reconcilation and render the result
};

export { render };
