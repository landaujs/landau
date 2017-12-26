const Landau = require('./index');
const renderer = require('./renderer');

const Cube = require('./Cube');
const Difference = require('./Difference');

describe('applyCsg', () => {
  test('is renderable', () => {
    const element = Landau.createElement({
      elementName: Difference,
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
      ],
    });

    const csgRes = renderer.renderAsCsg(element);
    expect(csgRes.polygons).toBeDefined();
  });
});


