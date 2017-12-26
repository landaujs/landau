const scadApi = require('@jscad/scad-api');
const {mirror} = scadApi.transformations;

const Component = require('./Component');

class Mirror extends Component {
  applyCsg(renderedChildren) {
    return mirror(this.props.normal, ...renderedChildren);
  }
}

module.exports = Mirror;
