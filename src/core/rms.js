/**
 * Return the root mean square of numeric data.
 * If the data is not numeric, undefined is returned.
 * 
 * @memberof Statistics
 * @instance
 * @returns {number|undefined} Root mean square
 */
function rms() {
  if (!this.isNumeric) {
    return undefined;
  }
  if (!this._rms) {
    const data = this.data;
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i] ** 2;
    }
    this._rms = Math.sqrt(sum / data.length);
  }
  return this._rms;
};

module.exports = rms;
