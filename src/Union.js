const scadApi = require('@jscad/scad-api');
const {union} = scadApi.booleanOps;

const Component = require('./Component');

class Union extends Component {
  applyCsg(renderedChildren) {
    return union(...renderedChildren);
  }
}

module.exports = Union;
