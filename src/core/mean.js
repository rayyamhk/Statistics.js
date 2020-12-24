/**
 * Return the mean of data.
 * If data is not numeric, undefined is returned.
 * 
 * @memberof Statistics
 * @instance
 * @returns {number|undefined} Mean
 */
function mean() {
  if (!this.isNumeric) {
    return undefined;
  }
  if (!this._mean) {
    const data = this.data;
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
    }
    this._mean = sum / data.length;
  }
  return this._mean;
};

module.exports = mean;
