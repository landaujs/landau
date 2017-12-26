// @flow
const scadApi = require('@jscad/scad-api');
const {cube} = scadApi.primitives3d;

const Component = require('./Component');

type Props = {
  /**
  Size of the cube.

  Can be provided as a single number for uniform size across all axis,
  or as an [x,y,z] array for individual sizes per axis.
  */
  size?: number | Array<number>,
  /**
  Whether to center the cube.

  Can be provided as a single boolean to center on all axis,
  or as an [x,y,z] array for individual centering per axis.
  */
  center?: boolean | Array<boolean>,
};

class Cube extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
    this.props.size = this.props.size || 1;
    this.props.center = this.props.center || false;
  }

  applyCsg() {
    return cube({size: this.props.size, center: this.props.center});
  }
}

module.exports = Cube;
