const Statistic = require('../index');

describe('p_stdev', () => {
  const tests = [
    {
      data: [-1, 1],
      expected: 1,
    },
    {
      data: [1, 2, 3, 4],
      expected: 1.118034,
    },
    {
      data: [-1, -2, -3, -4],
      expected: 1.118034,
    },
    {
      data: [1, 1, 2, 3, 4],
      expected: 1.1661904,
    },
    {
      data: [1, 1, 2, 2, 3, 4, 5],
      expected: 1.3997084,
    },
    {
      data: [1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 5],
      expected: 1.771691,
    },
    {
      data: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 4],
      expected: 1.146128,
    },
    {
      data: [-12, 1, 5, 10, 12, 23, 32, 32, 34],
      expected: 15.134785
    }
  ];

  tests.forEach(({data, expected}, idx) => {
    it(`TEST ${idx + 1}: should get ${expected}`, () => {
      const model = new Statistic();
      model.fit(data);
      const received = model.p_stdev();
      expect(received.toFixed(5)).toBe(expected.toFixed(5));
    });
  });
});
