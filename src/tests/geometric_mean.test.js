const Statistic = require('../index');

describe('geometric_mean', () => {
  const tests = [
    {
      data: [1],
      expected: 1,
    },
    {
      data: [-1, 1],
      expected: undefined,
    },
    {
      data: [1, 2, 3, 4],
      expected: 2.21336,
    },
    {
      data: [-1, -2, -3, -4],
      expected: undefined,
    },
    {
      data: [1, 1, 2, 3, 4],
      expected: 1.88818,
    },
    {
      data: [1, 1, 2, 2, 3, 4, 5],
      expected: 2.18791,
    },
    {
      data: [1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 5],
      expected: 2.54833,
    },
    {
      data: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 4],
      expected: 2.31645,
    },
  ];

  tests.forEach(({data, expected}, idx) => {
    it(`TEST ${idx + 1}: should get ${expected}`, () => {
      const model = new Statistic();
      model.fit(data);
      const received = model.geometric_mean();
      if (received === undefined) {
        expect(received).toBe(undefined);
      } else {
        expect(received.toFixed(5)).toBe(expected.toFixed(5));
      }
    });
  });
});
