'use strict';

function compute_average(collection) {
  return collection.reduce((x, y) => x + y) / collection.length;
}

module.exports = compute_average;
