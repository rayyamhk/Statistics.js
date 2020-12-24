const { NOT_ENOUGH_DATA } = require('../Errors');

function variance() {
  if (!this.isNumeric) {
    return undefined;
  }
  const data = this.data;
  if (data.length < 2) {
    throw NOT_ENOUGH_DATA;
  }
  if (!this._variance) {
    const mean = this.mean();
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += (data[i] - mean) ** 2;
    }
    this._variance = sum / (data.length - 1);
  }
  return this._variance;
};

module.exports = variance;
