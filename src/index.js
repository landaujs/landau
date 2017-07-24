const LandauElement = require('./LandauElement');

const Cube = require('./Cube');
const Cylinder = require('./Cylinder');
const GeodesicSphere = require('./GeodesicSphere');
const Polyhedron = require('./Polyhedron');
const Sphere = require('./Sphere');
const Torus = require('./Torus');

const Difference = require('./Difference');
const Union = require('./Union');

const Center = require('./Center');
const Mirror = require('./Mirror');
const Rotate = require('./Rotate');
const Scale = require('./Scale');
const Translate = require('./Translate');

const createElement = (type) => {
  if (type.elementName) {
    return createElementPureJsx(type);
  } else {
    throw new Error("Error creating Element. This might be caused by using `babel-plugin-transform-react-jsx` instead of `babel-plugin-transform-jsx`.");
  }
};

const createElementPureJsx = (element) => {
  const elementClass = element.elementName;
  const props = element.attributes;

  let children = element.children;
  if (children && children.length === 1 && Array.isArray(children[0])) {
    children = children[0];
  }
  props.children = props.children || children; // TODO: warn when both are present
  if (props.children) {
    // Filter out comments
    props.children = props.children.filter(function(x) {
      return x !== '';
    });
  }

  return new elementClass(props);
};

module.exports = {
  createElement,

  LandauElement,

  Cube,
  Cylinder,
  GeodesicSphere,
  Polyhedron,
  Sphere,
  Torus,

  Difference,
  Union,

  Center,
  Mirror,
  Rotate,
  Scale,
  Translate,
};
