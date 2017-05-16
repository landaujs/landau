const LandauElement = require('./src/LandauElement');

const Cube = require('./src/Cube');
const Cylinder = require('./src/Cylinder');
const GeodesicSphere = require('./src/GeodesicSphere');
const Polyhedron = require('./src/Polyhedron');
const Sphere = require('./src/Sphere');
const Torus = require('./src/Torus');

const Difference = require('./src/Difference');
const Union = require('./src/Union');

const Center = require('./src/Center');
const Mirror = require('./src/Mirror');
const Rotate = require('./src/Rotate');
const Scale = require('./src/Scale');
const Translate = require('./src/Translate');

const createElement = (element) => {
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
