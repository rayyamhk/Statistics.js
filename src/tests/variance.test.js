const Statistic = require('../index');

describe('variance', () => {
  const tests = [
    {
      data: [-1, 1],
      expected: 2,
    },
    {
      data: [1, 2, 3, 4],
      expected: 5/3,
    },
    {
      data: [-1, -2, -3, -4],
      expected: 5/3,
    },
    {
      data: [1, 1, 2, 3, 4],
      expected: 1.7,
    },
    {
      data: [1, 1, 2, 2, 3, 4, 5],
      expected: 2.2857143,
    },
    {
      data: [1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 5],
      expected: 3.4242424,
    },
    {
      data: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 4],
      expected: 1.4230769,
    },
    {
      data: [-12, 1, 5, 10, 12, 23, 32, 32, 34],
      expected: 257.69444
    }
  ];

  tests.forEach(({data, expected}, idx) => {
    it(`TEST ${idx + 1}: should get ${expected}`, () => {
      const model = new Statistic();
      model.fit(data);
      const received = model.variance();
      expect(received.toFixed(5)).toBe(expected.toFixed(5));
    });
  });
});
