const {
  INVALID_ARRAY,
  INVALID_DATA,
} = require('./Errors');

function Statistic(config = {}) {
  const {
    isNumeric = true,
    isOrdinal = true,
    sort = (a, b) => a < b ? -1 : 1,
  } = config;

  this.isNumeric = isNumeric;
  this.isOrdinal = isNumeric || isOrdinal;
  this.sort = sort;
};

module.exports = Statistic;

Statistic.prototype.fit = function(data) {
  if (!Array.isArray(data)) {
    throw INVALID_ARRAY;
  }
  if (data.length === 0) {
    throw INVALID_DATA;
  }
  this.data = data;
  this.sorted_data = [...data].sort((a, b) => this.sort(a, b));
};

Statistic.prototype.geometric_mean = require('./core/geometric_mean');
Statistic.prototype.harmonic_mean = require('./core/harmonic_mean');
Statistic.prototype.max = require('./core/max');
Statistic.prototype.mean = require('./core/mean');
Statistic.prototype.median = require('./core/median');
Statistic.prototype.min = require('./core/min');
Statistic.prototype.mode = require('./core/mode');
Statistic.prototype.p_stdev = require('./core/p_stdev');
Statistic.prototype.p_variance = require('./core/p_variance');
Statistic.prototype.range = require('./core/range');
Statistic.prototype.rms = require('./core/rms');
Statistic.prototype.stdev = require('./core/stdev');
Statistic.prototype.variance = require('./core/variance');
