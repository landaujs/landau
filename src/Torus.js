const scadApi = require('@jscad/scad-api');
const {torus} = scadApi.primitives3d;

const LandauElement = require('./LandauElement');

class Torus extends LandauElement {
  constructor(props) {
    super(props);
    this.props.center = this.props.center || false;
  }

  render() {
    return torus(this.props);
  }
}

module.exports = Torus;
