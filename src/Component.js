class Component {
  constructor(props) {
    this.props = props;
  }

  /**
   Create a CSG object by applying CSG operations.

   In a primitive this should create the primitive.
   In a modifier it should build the child objects and apply the CSG modifier that yields a new CSG object.
   In a generic component this should use the default implementation which first executes render(), which returns as a top-level component either a primitive or modifier, on which applyCsg() is then called.
  */
  applyCsg(renderedChildren) {
    if (renderedChildren.length > 1) {
      throw new Error('Returning more than 1 Element from render() is not supported.');
    }
    return renderedChildren[0];
  }

  /**
   Returns the composed structure of the Component with its child components.
  */
  render() {
    return this.props.children;
  }
}

module.exports = Component;
