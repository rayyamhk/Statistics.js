const Statistic = require('../index');

describe('mean', () => {
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
      expected: 2.2,
    },
    {
      data: [1, 1, 2, 2, 3, 4, 5],
      expected: 18/7,
    },
    {
      data: [1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 5],
      expected: 38/12,
    },
    {
      data: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 4],
      expected: 34/13,
    },
  ];

  tests.forEach(({data, expected}, idx) => {
    it(`TEST ${idx + 1}: should get ${expected}`, () => {
      const model = new Statistic();
      model.fit(data);
      const received = model.mean();
      expect(received).toBe(expected);
    });
  });
});
