const scadApi = require('@jscad/scad-api');
const {scale} = scadApi.transformations;

const Component = require('./Component');

class Scale extends Component {
  applyCsg(renderedChildren) {
    return scale(this.props.vector, ...renderedChildren);
  }
}

module.exports = Scale;
