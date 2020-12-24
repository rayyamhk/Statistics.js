const { NOT_ENOUGH_DATA } = require('../Errors');

function p_variance() {
  if (!this.isNumeric) {
    return undefined;
  }
  const data = this.data;
  if (data.length < 2) {
    throw NOT_ENOUGH_DATA;
  }
  if (!this._p_variance) {
    const variance = this.variance();
    this._p_variance = variance * (data.length - 1) / data.length;
  }
  return this._p_variance;
};

module.exports = p_variance;
