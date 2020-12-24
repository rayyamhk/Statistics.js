const Statistic = require('../index');

describe('p-variance', () => {
  const tests = [
    {
      data: [-1, 1],
      expected: 1,
    },
    {
      data: [1, 2, 3, 4],
      expected: 1.25,
    },
    {
      data: [-1, -2, -3, -4],
      expected: 1.25,
    },
    {
      data: [1, 1, 2, 3, 4],
      expected: 1.36,
    },
    {
      data: [1, 1, 2, 2, 3, 4, 5],
      expected: 1.9591837,
    },
    {
      data: [1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 5],
      expected: 3.1388889,
    },
    {
      data: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 4],
      expected: 1.3136095,
    },
    {
      data: [-12, 1, 5, 10, 12, 23, 32, 32, 34],
      expected: 229.06173
    }
  ];

  tests.forEach(({data, expected}, idx) => {
    it(`TEST ${idx + 1}: should get ${expected}`, () => {
      const model = new Statistic();
      model.fit(data);
      const received = model.p_variance();
      expect(received.toFixed(5)).toBe(expected.toFixed(5));
    });
  });
});
