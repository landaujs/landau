const scadApi = require('@jscad/scad-api');
const {rotate} = scadApi.transformations;

const Component = require('./Component');

class Rotate extends Component {
  applyCsg(renderedChildren) {
    return rotate(this.props.vector, ...renderedChildren);
  }
}

module.exports = Rotate;
