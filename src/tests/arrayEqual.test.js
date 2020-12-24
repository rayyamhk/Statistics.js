const arrayEqual = require('../utils/arrayEqual');

describe('arrayEqual', () => {
  const tests = [
    {
      arr1: [1, 2, 3],
      arr2: [2, 3, 1],
      expected: true,
    },
    {
      arr1: [1, 2, 3],
      arr2: [1, 2, 3],
      expected: true,
    },
    {
      arr1: [1, 2, 3, 4],
      arr2: [4, 2, 1, 3],
      expected: true,
    },
    {
      arr1: [1, 2, 3, 4],
      arr2: [1, 2, 3, 4, 4],
      expected: false,
    },
    {
      arr1: [1, 2, 3, 4],
      arr2: [5, 6, 7, 8],
      expected: false,
    },
  ];

  tests.forEach((test) => {
    const { arr1, arr2, expected } = test;
    it(`should receive ${expected}`, () => {
      const received = arrayEqual(arr1, arr2);
      expect(received).toBe(expected);
    });
  });
});
