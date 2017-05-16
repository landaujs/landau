const scadApi = require('@jscad/scad-api');
const {mirror} = scadApi.transformations;

const LandauElement = require('./LandauElement');

class Mirror extends LandauElement {
  render() {
    return mirror(this.props.normal, ...this.props.children.map(child => child.render()));
  }
}

module.exports = Mirror;
