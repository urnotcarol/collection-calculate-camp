'use strict';

function calculate_elements_sum(collection, element) {
  let res;
  for (let i = 0 ; i < collection.length; i++) {
    if (collection[i] === element) {
      res = i;
      break;
    }
  }
  return res;
}

module.exports = calculate_elements_sum;
