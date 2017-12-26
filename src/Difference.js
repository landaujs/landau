// @flow
const scadApi = require('@jscad/scad-api');
const {difference} = scadApi.booleanOps;

const Component = require('./Component');

type Props = {
  children: Array<Object>,
};

class Difference extends Component {
  props: Props;

  applyCsg(renderedChildren) {
    return difference(...renderedChildren);
  }
}

module.exports = Difference;
