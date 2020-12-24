const Statistic = require('../index');
const arrayEqual = require('../utils/arrayEqual');

describe('mode', () => {
  const tests = [
    {
      data: [1],
      expected: [1],
    },
    {
      data: [1, 2, 3, 4],
      expected: [1, 2, 3, 4],
    },
    {
      data: [1, 1, 2, 3, 4],
      expected: [1],
    },
    {
      data: [1, 1, 2, 2, 3, 4, 5],
      expected: [1, 2],
    },
    {
      data: [1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 5],
      expected: [5],
    },
    {
      data: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 4],
      expected: [4],
    },
    {
      data: ['a', 'b', 'c', 'c', 'b', 'a', 'd', 'a'],
      expected: ['a']
    },
    {
      data: ['a', 'b', 'c', 'd'],
      expected: ['a', 'b', 'c', 'd']
    },
    {
      data: ['a', 'a', 'a', 'b', 'b', 'b', 'c', 'd'],
      expected: ['a', 'b']
    }
  ];

  tests.forEach(({data, expected}, idx) => {
    it(`TEST ${idx + 1}: should get ${expected}`, () => {
      const model = new Statistic();
      model.fit(data);
      const received = model.mode();
      expect(arrayEqual(received, expected)).toBe(true);
    });
  });
});
