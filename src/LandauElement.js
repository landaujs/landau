class LandauElement {
  constructor(props) {
    this.props = props;
  }

  build() {
    return this;
  }

  render() {
    return this.build().render();
  }

  tree() {
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
}

module.exports = LandauElement;
