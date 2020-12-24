function max() {
  if (!this.isNumeric) {
    return undefined;
  }
  if (!this._max) {
    this._max = this.sorted_data[this.data.length - 1];
  }
  return this._max;
};

module.exports = max;
