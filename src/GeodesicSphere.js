const scadApi = require('@jscad/scad-api');
const {geodesicSphere} = scadApi.primitives3d;

const Component = require('./Component');

class GeodesicSphere extends Component {
  constructor(props) {
    super(props);
    this.props.center = this.props.center || false;
  }

  applyCsg() {
    return geodesicSphere(this.props);
  }
}

module.exports = GeodesicSphere;
