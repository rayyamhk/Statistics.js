const { NOT_ENOUGH_DATA } = require('../Errors');

/**
 * Return the sample standard deviation of data,
 * an array of at least two numeric values.
 * If the data is not numeric, undefined is returned.
 * 
 * @memberof Statistics
 * @instance
 * @returns {number|undefined} Sample standard deviation
 */
function stdev() {
  if (!this.isNumeric) {
    return undefined;
  }
  const data = this.data;
  if (data.length < 2) {
    throw NOT_ENOUGH_DATA;
  }
  if (!this._stdev) {
    const variance = this.variance();
    this._stdev = Math.sqrt(variance);
  }
  return this._stdev;
};

module.exports = stdev;
