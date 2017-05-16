const scadApi = require('@jscad/scad-api');
const {polyhedron} = scadApi.primitives3d;

const LandauElement = require('./LandauElement');

class Polyhedron extends LandauElement {
  render() {
    return polyhedron({points: this.props.points, polygons: this.props.polygons});
  }
}

module.exports = Polyhedron;
