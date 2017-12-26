const scadApi = require('@jscad/scad-api');
const {sphere} = scadApi.primitives3d;

const Component = require('./Component');

class Sphere extends Component {
  constructor(props) {
    super(props);
    this.props.center = this.props.center || false;
  }

  applyCsg() {
    return sphere(this.props);
  }
}

module.exports = Sphere;
