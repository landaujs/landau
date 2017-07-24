// @flow
const scadApi = require('@jscad/scad-api');
const {cylinder} = scadApi.primitives3d;

const LandauElement = require('./LandauElement');

type DetailedRadius = {
  start: number,
  end: number,
};

type StartEnd = {
  start: Array<number>,
  end: Array<number>,
}

type Props = {
  radius?: number | DetailedRadius,
  height?: number,

  /**
  Can be provided to specify the exact position of the center of the start and end face of the cylinder.
  */
  position?: StartEnd,

  resolution?: number,

  /**
  Whether to center the cube.

  Can be provided as a single boolean to center on all axis,
  or as an [x,y,z] array for individual centering per axis.
  */
  center?: boolean | Array<boolean>,
};

class Cylinder extends LandauElement {
  props: Props;

  render() {
    const args = {};
    if (this.props.radius != null) {
      if (typeof this.props.radius === 'number') {
        args.r = this.props.radius;
      } else {
        args.r1 = this.props.radius.start;
        args.r2 = this.props.radius.end;
      }
    }
    if (this.props.height != null) {
      args.h = this.props.height;
    }
    if (this.props.position != null) {
      args.start = this.props.position.start;
      args.end = this.props.position.end;
    }
    if (this.props.resolution != null) {
      args.fn = this.props.resolution;
    }
    if (this.props.center != null) {
      args.center = this.props.center;
    }

    return cylinder(args);
  }
}

module.exports = Cylinder;
