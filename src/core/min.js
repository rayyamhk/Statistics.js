function min() {
  if (!this.isNumeric) {
    return undefined;
  }
  if (!this._min) {
    this._min = this.sorted_data[0];
  }
  return this._min;
};

module.exports = min;
