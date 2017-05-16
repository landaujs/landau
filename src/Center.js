const scadApi = require('@jscad/scad-api');
const {center} = scadApi.transformations;

const LandauElement = require('./LandauElement');

class Center extends LandauElement {
  constructor(props) {
    super(props);
    this.props.vector = props.vector || [0, 0, 0];
  }

  render() {
    return center(this.props.vector, ...this.props.children.map(child => child.render()));
  }
}

module.exports = Center;
