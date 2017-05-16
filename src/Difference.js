const scadApi = require('@jscad/scad-api');
const {difference} = scadApi.booleanOps;

const LandauElement = require('./LandauElement');

class Difference extends LandauElement {
  render() {
    return difference(...this.props.children.map(child => child.render()));
  }
}

module.exports = Difference;
