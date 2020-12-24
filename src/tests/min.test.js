const Statistic = require('../index');

describe('min', () => {
  const tests = [
    {
      data: [1],
      expected: 1,
    },
    {
      data: [-1, 1],
      expected: -1,
    },
    {
      data: [1, 2, 3, 4],
      expected: 1,
    },
    {
      data: [-1, -2, -3, -4],
      expected: -4,
    },
    {
      data: [1, 1, 2, 3, 4],
      expected: 1,
    },
    {
      data: [1, 1, 2, 2, 3, 4, 5],
      expected: 1,
    },
    {
      data: [1, 2, 3, 4, 1, 2, -1000, 4, 1, 2, 3, 4, 4],
      expected: -1000,
    },
  ];

  tests.forEach(({data, expected}, idx) => {
    it(`TEST ${idx + 1}: should get ${expected}`, () => {
      const model = new Statistic();
      model.fit(data);
      const received = model.min();
      expect(received).toBe(expected);
    });
  });
});
