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
