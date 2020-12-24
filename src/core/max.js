/**
 * Return the maximum value of numeric data.
 * If data is not numeric, undefined is returned.
 * 
 * @memberof Statistics
 * @instance
 * @returns {number|undefined} Maximal
 */
function max() {
  if (!this.isNumeric) {
    return undefined;
  }
  if (!this._max) {
    const data = this.data;
    let max = data[0];
    for (let i = 1; i < data.length; i++) {
      if (data[i] > max) {
        max = data[i];
      }
    }
    this._max = max;
  }
  return this._max;
};

module.exports = max;
