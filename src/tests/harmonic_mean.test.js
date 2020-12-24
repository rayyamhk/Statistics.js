const Statistic = require('../index');

describe('harmonic_mean', () => {
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
      expected: 1.92,
    },
    {
      data: [-1, -2, -3, -4],
      expected: undefined,
    },
    {
      data: [1, 1, 2, 3, 4],
      expected: 1.6216216216216,
    },
    {
      data: [1, 1, 2, 2, 3, 4, 5],
      expected: 1.8502202643172,
    },
    {
      data: [1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 5],
      expected: 1.972602739726,
    },
    {
      data: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 4],
      expected: 2,
    },
  ];

  tests.forEach(({data, expected}, idx) => {
    it(`TEST ${idx + 1}: should get ${expected}`, () => {
      const model = new Statistic();
      model.fit(data);
      const received = model.harmonic_mean();
      if (received === undefined) {
        expect(received).toBe(undefined);
      } else {
        expect(received.toFixed(5)).toBe(expected.toFixed(5));
      }
    });
  });
});
