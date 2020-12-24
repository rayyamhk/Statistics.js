const Statistic = require('../index');

describe('range', () => {
  const tests = [
    {
      data: [1],
      expected: 0,
    },
    {
      data: [-1, 1],
      expected: 2,
    },
    {
      data: [1, 2, 3, 4],
      expected: 3,
    },
    {
      data: [-1, -2, -3, -4],
      expected: 3,
    },
    {
      data: [1, 1, 2, 3, 4],
      expected: 3,
    },
    {
      data: [1, 1, 2, 2, 3, 4, 5],
      expected: 4,
    },
    {
      data: [1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 5],
      expected: 4,
    },
    {
      data: [1, 2, 3, 4, 1, 2000, 3, 4, 1, 2, -3000, 4, 4],
      expected: 5000,
    },
  ];

  tests.forEach(({data, expected}, idx) => {
    it(`TEST ${idx + 1}: should get ${expected}`, () => {
      const model = new Statistic();
      model.fit(data);
      const received = model.range();
      expect(received).toBe(expected);
    });
  });
});
