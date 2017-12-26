const Landau = require('./index');
const LandauElement = require('./LandauElement');
const Component = require('./Component');
const Cube = require('./Cube');
const Union = require('./Union');
const Translate = require('./Translate');

class CubeUnion extends Component {
  render() {
    return Landau.createElement({
      elementName: Union,
      attributes: {},
      children: [
        Landau.createElement({
          elementName: Cube,
          attributes: {},
          children: null,
        }),
        Landau.createElement({
          elementName: Cube,
          attributes: {},
          children: null,
        }),
      ]
    })
  }
}

class TranslatedCubeUnion extends Component {
  render() {
    return Landau.createElement({
      elementName: Translate,
      attributes: {},
      children: [
        Landau.createElement({
          elementName: CubeUnion,
          attributes: {},
          children: null,
        }),
      ]
    });
  }
}

describe('renderAsTreeString', () => {
  describe('CubeUnion', () => {
    const element = Landau.createElement({
      elementName: CubeUnion,
      attributes: {},
      children: null,
    });

    it('is rendered correctly unexpanded', () => {
      const renderRes = Landau.renderAsTreeString(element);
      expect(renderRes).toEqual('CubeUnion\n');
    });

    it('is rendered correctly expanded', () => {
      const renderRes = Landau.renderAsTreeString(element, true);
      expect(renderRes).toEqual('CubeUnion\n-Union\n--Cube\n--Cube\n');
    });
  });

  describe('CubeUnion inside Translate', () => {
    const element = Landau.createElement({
      elementName: Translate,
      attributes: {},
      children: [Landau.createElement({
        elementName: CubeUnion,
        attributes: {},
        children: null,
      })],
    });

    it('is rendered correctly unexpanded', () => {
      const renderRes = Landau.renderAsTreeString(element);
      expect(renderRes).toEqual('Translate\n-CubeUnion\n');
    });

    it('is rendered correctly expanded', () => {
      const renderRes = Landau.renderAsTreeString(element, true);
      expect(renderRes).toEqual('Translate\n-CubeUnion\n--Union\n---Cube\n---Cube\n');
    });
  });
});

describe.skip('render', () => {
  test('Primitive returns itself in render', () => {
    class CubeLike extends LandauElement {
    }
    const instance = new CubeLike({});

    const renderRes = instance.render();
    expect(renderRes.constructor.name).toEqual('CubeLike');
  });
});
