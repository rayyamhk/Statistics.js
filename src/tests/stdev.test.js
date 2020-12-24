const Statistic = require('../index');

describe('stdev', () => {
  const tests = [
    {
      data: [-1, 1],
      expected: 1.4142136,
    },
    {
      data: [1, 2, 3, 4],
      expected: 1.2909944,
    },
    {
      data: [-1, -2, -3, -4],
      expected: 1.2909944,
    },
    {
      data: [1, 1, 2, 3, 4],
      expected: 1.3038405,
    },
    {
      data: [1, 1, 2, 2, 3, 4, 5],
      expected: 1.5118579,
    },
    {
      data: [1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 5],
      expected: 1.8504709,
    },
    {
      data: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 4],
      expected: 1.1929279,
    },
    {
      data: [-12, 1, 5, 10, 12, 23, 32, 32, 34],
      expected: 16.052864
    }
  ];

  tests.forEach(({data, expected}, idx) => {
    it(`TEST ${idx + 1}: should get ${expected}`, () => {
      const model = new Statistic();
      model.fit(data);
      const received = model.stdev();
      expect(received.toFixed(5)).toBe(expected.toFixed(5));
    });
  });
});
