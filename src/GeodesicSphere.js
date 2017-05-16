const scadApi = require('@jscad/scad-api');
const {geodesicSphere} = scadApi.primitives3d;

const LandauElement = require('./LandauElement');

class GeodesicSphere extends LandauElement {
  constructor(props) {
    super(props);
    this.props.center = this.props.center || false;
  }

  render() {
    return geodesicSphere(this.props);
  }
}

module.exports = GeodesicSphere;
