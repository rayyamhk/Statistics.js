/**
 * Return the range of numeric data.
 * If the data is not numeric, undefined is returned.
 * 
 * @memberof Statistics
 * @instance
 * @returns {number|undefined} Range of data
 */
function range() {
  if (!this.isNumeric) {
    return undefined;
  }
  if (!this._range) {
    this._range = this.max() - this.min();
  }
  return this._range;
};

module.exports = range;
