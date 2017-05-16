const scadApi = require('@jscad/scad-api');
const {rotate} = scadApi.transformations;

const LandauElement = require('./LandauElement');

class Rotate extends LandauElement {
  render() {
    return rotate(this.props.vector, ...this.props.children.map(child => child.render()));
  }
}

module.exports = Rotate;
