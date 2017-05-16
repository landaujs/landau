const scadApi = require('@jscad/scad-api');
const {cylinder} = scadApi.primitives3d;

const LandauElement = require('./LandauElement');

class Cylinder extends LandauElement {
  constructor(props) {
    super(props);
    this.props.center = this.props.center || false;
  }

  render() {
    return cylinder(this.props);
  }
}

module.exports = Cylinder;
