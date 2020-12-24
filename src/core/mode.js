/**
 * Return an array of most frequently occuring values.
 * The data can be nominal, ordinal or numeric.
 * 
 * @memberof Statistics
 * @instance
 * @returns {array<number>} Mode of data
 */
function mode() {
  if (!this._mode) {
    const data = this.sorted_data;
    const explore = {};
    for (let i = 0; i < data.length; i++) {
      const e = data[i];
      if (explore[e]) {
        explore[e]++;
      } else {
        explore[e] = 1;
      }
    };
    const frequencies = Object.values(explore);
    let max = 0;
    for (let i = 0; i < frequencies.length; i++) {
      const freq = frequencies[i];
      if (freq > max) {
        max = freq;
      }
    }
    let counter = 0, current = null;
    const modes = [];
    for (let i = 0; i < data.length; i++) {
      const e = data[i];
      if (current === e) {
        counter++;
      } else {
        if (counter === max) {
          modes.push(current);
        }
        current = e;
        counter = 1;
      }
    }
    if (counter === max) {
      modes.push(current);
    }
    this._mode = modes;
  }
  return this._mode;
};

module.exports = mode;
