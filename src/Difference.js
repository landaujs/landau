// @flow
const scadApi = require('@jscad/scad-api');
const {difference} = scadApi.booleanOps;

const LandauElement = require('./LandauElement');

type Props = {
  children: Array<Object>,
};

class Difference extends LandauElement {
  props: Props;

  render() {
    return difference(...this.props.children.map(child => child.render()));
  }
}

module.exports = Difference;
