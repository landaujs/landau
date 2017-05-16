const scadApi = require('@jscad/scad-api');
const {sphere} = scadApi.primitives3d;

const LandauElement = require('./LandauElement');

class Sphere extends LandauElement {
  constructor(props) {
    super(props);
    this.props.center = this.props.center || false;
  }

  render() {
    return sphere(this.props);
  }
}

module.exports = Sphere;
