const scadApi = require('@jscad/scad-api');
const {scale} = scadApi.transformations;

const LandauElement = require('./LandauElement');

class Scale extends LandauElement {
  render() {
    return scale(this.props.vector, ...this.props.children.map(child => child.render()));
  }
}

module.exports = Scale;
