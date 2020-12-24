const Statistic = require('../index');

describe('rms', () => {
  const tests = [
    {
      data: [1],
      expected: 1,
    },
    {
      data: [-1, 1],
      expected: 1,
    },
    {
      data: [1, 2, 3, 4],
      expected: Math.sqrt(30/4),
    },
    {
      data: [-1, -2, -3, -4],
      expected: Math.sqrt(30/4),
    },
    {
      data: [1, 1, 2, 3, 4],
      expected: Math.sqrt(31/5),
    },
    {
      data: [1, 1, 2, 2, 3, 4, 5],
      expected: Math.sqrt(60/7),
    },
    {
      data: [1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 5],
      expected: Math.sqrt(158/12),
    },
    {
      data: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 4],
      expected: Math.sqrt(106/13),
    },
  ];

  tests.forEach(({data, expected}, idx) => {
    it(`TEST ${idx + 1}: should get ${expected}`, () => {
      const model = new Statistic();
      model.fit(data);
      const received = model.rms();
      expect(received).toBe(expected);
    });
  });
});
