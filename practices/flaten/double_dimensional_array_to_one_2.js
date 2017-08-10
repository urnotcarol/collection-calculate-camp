'use strict';

function double_to_one(collection) {
  let flattened = [];
  collection.forEach(elem => flattened.push(...elem));
  return [...new Set(flattened)];
}

module.exports = double_to_one;
