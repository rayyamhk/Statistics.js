/**
 * Return the median of ordinal and numeric data.
 * If data is nominal, undefined is returned.
 * When the number of data points is even, if the data is numeric,
 * the median is interpolated by taking the average of the two middle values.
 * If the data is ordinal, the high median is returned.
 * 
 * @memberof Statistics
 * @instance
 * @returns {number|undefined} Median
 */
function median() {
  if (!this.isOrdinal) {
    return undefined;
  }
  const data = this.sorted_data;
  const start = Math.floor(data.length / 2);
  // numeric
  if (!this._median && this.isNumeric) {
    const isMid = start === data.length / 2;
    if (isMid) {
      this._median = (data[start] + data[start - 1]) / 2;
      return this._median;
    }
    this._median = data[start];
    return this._median;
  }
  // ordinal, returns higher median
  this._median = data[start];
  return this._median;
};

module.exports = median;
