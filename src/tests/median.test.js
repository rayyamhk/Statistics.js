const Statistic = require('../index');

describe('median', () => {
  const tests = [
    {
      data: [1],
      expected: 1,
    },
    {
      data: [-1, 1],
      expected: 0,
    },
    {
      data: [1, 2, 3, 4],
      expected: 2.5,
    },
    {
      data: [-1, -2, -3, -4],
      expected: -2.5,
    },
    {
      data: [1, 1, 2, 3, 4],
      expected: 2,
    },
    {
      data: [1, 1, 2, 2, 3, 4, 5],
      expected: 2,
    },
    {
      data: [1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 5],
      expected: 3.5,
    },
    {
      data: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 4],
      expected: 3,
    },
    {
      data: ['a', 'b', 'c'],
      expected: 'b',
      config: {
        isNumeric: false
      }
    },
    {
      data: ['a', 'b', 'b', 'c', 'c', 'c'],
      expected: 'c',
      config: {
        isNumeric: false
      }
    }
  ];

  tests.forEach(({data, expected, config}, idx) => {
    it(`TEST ${idx + 1}: should get ${expected}`, () => {
      const model = new Statistic(config);
      model.fit(data);
      const received = model.median();
      expect(received).toBe(expected);
    });
  });
});
