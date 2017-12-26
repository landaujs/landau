const scadApi = require('@jscad/scad-api');
const {polyhedron} = scadApi.primitives3d;

const Component = require('./Component');

class Polyhedron extends Component {
  applyCsg() {
    return polyhedron({points: this.props.points, polygons: this.props.polygons});
  }
}

module.exports = Polyhedron;
