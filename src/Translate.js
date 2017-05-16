const scadApi = require('@jscad/scad-api');
const {translate} = scadApi.transformations;

const LandauElement = require('./LandauElement');

class Translate extends LandauElement {
  render() {
    return translate(this.props.vector, ...this.props.children.map(child => child.render()));
  }
}

module.exports = Translate;
