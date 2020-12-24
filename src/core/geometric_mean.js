/**
 * Return the geometric mean of data.
 * If the data is not numeric, undefined is returned.
 * If the data contains negative values, undefined is returned.
 * 
 * @memberof Statistics
 * @instance
 * @returns {number|undefined} Harmonic mean
 */
function geometric_mean() {
  if (!this.isNumeric) {
    return undefined;
  }
  if (!this._gmean) {
    let product = 1;
    const data = this.data;
    for (let i = 0; i < data.length; i++) {
      const e = data[i];
      if (e < 0) {
        return undefined;
      }
      product *= e;
    }
    this._gmean = Math.pow(product, 1 / data.length);
  }
  return this._gmean;
};

module.exports = geometric_mean;
