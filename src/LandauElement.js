class LandauElement {
  constructor(type, props) {
    this['$$typeof'] = Symbol.for('landau.element')

    this.type = type;
    this.props = props;

    // TODO: owner (component that created the element)
  }

  static tree() {
    console.log('props', this.props);
    console.log('render', this.build());
    let children = (this.props || {}).children;
    if (children) {
      children = children.map(function(child) {
        return child.tree();
      });
    }
    let props = this.props;
    if (props) {
      delete(props.children);
    }
    return {
      elementName: this.constructor.name,
      props: props,
      children: children,
    };
  }

  static createElement(type) {
    if (type.elementName) {
      return LandauElement.createElementPureJsx(type);
    } else {
      throw new Error("Error creating Element. This might be caused by using `babel-plugin-transform-react-jsx` instead of `babel-plugin-transform-jsx`.");
    }
  };

  static createElementPureJsx(element) {
    const type = element.elementName;
    const props = element.attributes;

    let children = element.children;
    if (children && children.length === 1 && Array.isArray(children[0])) {
      children = children[0];
    }
    props.children = props.children || children; // TODO: warn when both are present
    if (props.children) {
      // Filter out comments
      props.children = props.children.filter(function(x) {
        return x !== '';
      });
    }

    return new LandauElement(type, props);
  };
}

module.exports = LandauElement;
