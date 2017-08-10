'use strict';

function calculate_elements_sum(collection, element) {
  let res;
  for (let i = collection.length - 1; i >= 0; i--) {
    if (collection[i] === element) {
      res = i;
      break;
    }
  }
  return res;
}

module.exports = calculate_elements_sum;
