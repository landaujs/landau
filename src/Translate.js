const scadApi = require('@jscad/scad-api');
const {translate} = scadApi.transformations;

const Component = require('./Component');
const Union = require('./Union');

class Translate extends Component {
  applyCsg(renderedChildren) {
    return translate(this.props.vector, ...renderedChildren);
  }
}

module.exports = Translate;
