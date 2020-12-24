function arrayEqual(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  const cache1 = {}, cache2 = {};
  for (let i = 0; i < arr1.length; i++) {
    const e = arr1[i];
    if (!cache1[e]) {
      cache1[e] = true;
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    const e = arr2[i];
    if (!cache1[e]) {
      return false;
    }
    if (!cache2[e]) {
      cache2[e] = true;
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    const e = arr1[i];
    if (!cache2[e]) {
      return false;
    }
  }
  return true;
};

module.exports = arrayEqual;
