function harmonic_mean() {
  if (!this.isNumeric) {
    return undefined;
  }
  if (!this._hmean) {
    let sum = 0;
    const data = this.data;
    for (let i = 0; i < data.length; i++) {
      const e = data[i];
      if (e <= 0) {
        return undefined;
      }
      sum += 1 / e;
    }
    this._hmean = data.length / sum;
  }
  return this._hmean;
};

module.exports = harmonic_mean;
