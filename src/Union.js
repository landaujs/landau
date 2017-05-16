const scadApi = require('@jscad/scad-api');
const {union} = scadApi.booleanOps;

const LandauElement = require('./LandauElement');

class Union extends LandauElement {
  render() {
    return union(...this.props.children.map(child => child.render()));
  }
}

module.exports = Union;
