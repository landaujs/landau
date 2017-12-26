/*
 Evaluates all the render() functions of an recursively, creating a fully materialized component tree.
 */
const materializeTree = (element) => {
  const clone = Object.assign({}, element);
  const inst = new clone.type(clone.props);
  clone.instance = inst;
  clone.rendered = inst.render();
  if (!Array.isArray(clone.rendered)) {
    if (clone.rendered) {
      clone.rendered = [clone.rendered];
    } else {
      clone.rendered = [];
    }
  }
  clone.rendered = clone.rendered.map(child => materializeTree(child));
  return clone;
}

const renderAsTreeStringRecurse = (element, depth = 0, expanded = false) => {
  let treeStr = '';
  [...Array(depth)].forEach((_, i) => {
    treeStr = treeStr + '-';
  });
  treeStr = treeStr + element.type.name + '\n';

  if (expanded) {
    let renderedChildren = element.rendered;

    renderedChildren.forEach((child) => {
      treeStr = treeStr + renderAsTreeStringRecurse(child, depth + 1, expanded);
    });
  } else if (element.props.children && element.props.children.length > 0) {
    element.props.children.forEach((child) => {
      treeStr = treeStr + renderAsTreeStringRecurse(child, depth + 1, expanded);
    });
  }

  return treeStr;
}

/**
 Renders a simple tree view of the element and its rendered children as string.
 */
const renderAsTreeString = (element, expanded = false) => {
  const materialized = materializeTree(element);
  const treeStr = renderAsTreeStringRecurse(materialized, 0, expanded);

  return treeStr;
}

const renderAsTreeRecurse = (element) => {
  const elementName = element.type.name;
  const newElement = Object.assign({}, element);
  newElement.elementName = elementName;
  newElement.children = newElement.rendered.map(child => renderAsTreeRecurse(child));
  delete(newElement.instance);
  delete(newElement.rendered);
  delete(newElement.type);
  delete(newElement['$$typeof']);

  return newElement;
}

/**
 Renders a object-tree view of the element and its rendered children.

 When `skipMateralize` is set to `true`, it is assumed that the provided `element` has already been materalized.
 */
const renderAsTree = (element, skipMateralize = false) => {
  let materialized = element;
  if (!skipMateralize) {
    materialized = materializeTree(element);
  }
  const tree = renderAsTreeRecurse(materialized);
  return tree;
}

const renderAsCsgRecurse = (element) => {
  const renderedChildren = element.rendered.map(child => renderAsCsgRecurse(child));
  return element.instance.applyCsg(renderedChildren);
}

/**
 Renders the element as a CSG object.

 When `skipMateralize` is set to `true`, it is assumed that the provided `element` has already been materalized.
 */
const renderAsCsg = (element, skipMateralize = false) => {
  let materialized = element;
  if (!skipMateralize) {
    materialized = materializeTree(element);
  }
  const csg = renderAsCsgRecurse(materialized);

  return csg;
}

module.exports = {
  materializeTree,
  renderAsCsg,
  renderAsTree,
  renderAsTreeString,
};
