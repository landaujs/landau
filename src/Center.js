// @flow
const scadApi = require('@jscad/scad-api');
const {center} = scadApi.transformations;

const LandauElement = require('./LandauElement');

type Props = {
  /**
  Whether to center the object.

  Can be provided as a single boolean to center on all axis,
  or as an [x,y,z] array for individual centering per axis.
  */
  vector?: boolean | Array<boolean>,

  children: Array<Object>,
};

/**
TODO: remove? This doesn't seem to do anything.
*/
class Center extends LandauElement {
  props: Props;

  constructor(props: Props) {
    super(props);
    this.props.vector = props.vector;
  }

  render() {
    return center(this.props.vector, ...this.props.children.map(child => child.render()));
  }
}

module.exports = Center;
