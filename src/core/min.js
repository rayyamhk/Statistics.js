/**
 * Return the minimum value of data.
 * If the data is not numeric, undefined is returned.
 * 
 * @memberof Statistics
 * @instance
 * @returns {number|undefined} Minimal
 */
function min() {
  if (!this.isNumeric) {
    return undefined;
  }
  if (!this._min) {
    const data = this.data;
    let min = data[0];
    for (let i = 0; i < data.length; i++) {
      if (data[i] < min) {
        min = data[i];
      }
    }
    this._min = min;
  }
  return this._min;
};

module.exports = min;
