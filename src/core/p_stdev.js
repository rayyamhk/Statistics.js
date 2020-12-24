const { NOT_ENOUGH_DATA } = require('../Errors');

function p_stdev() {
  if (!this.isNumeric) {
    return undefined;
  }
  const data = this.data;
  if (data.length < 2) {
    throw NOT_ENOUGH_DATA;
  }
  if (!this._p_stdev) {
    const p_variance = this.p_variance();
    this._p_stdev = Math.sqrt(p_variance);
  }
  return this._p_stdev;
};

module.exports = p_stdev;
