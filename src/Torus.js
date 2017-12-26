const scadApi = require('@jscad/scad-api');
const {torus} = scadApi.primitives3d;

const Component = require('./Component');

class Torus extends Component {
  constructor(props) {
    super(props);
    this.props.center = this.props.center || false;
  }

  applyCsg() {
    return torus(this.props);
  }
}

module.exports = Torus;
