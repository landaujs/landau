const Landau = require('./index');
const LandauElement = require('./LandauElement');
const renderer = require('./renderer');
const Cube = require('./Cube');

describe('applyCsg', () => {
  test('is renderable', () => {
    const element = Landau.createElement({
      elementName: Cube,
      attributes: {},
      children: null,
    });

    const csgRes = renderer.renderAsCsg(element);
    expect(csgRes.polygons).toBeDefined();
  });
});
