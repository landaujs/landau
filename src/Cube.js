const scadApi = require('@jscad/scad-api');
const {cube} = scadApi.primitives3d;

const LandauElement = require('./LandauElement');

class Cube extends LandauElement {
  constructor(props) {
    super(props);
    this.props.center = this.props.center || false;
  }

  render() {
    return cube({size: this.props.size, center: this.props.center});
  }
}

module.exports = Cube;
