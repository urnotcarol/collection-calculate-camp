'use strict';

function canBeDivided(dividend, collection) {
  let res = false;
  collection.forEach(elem => {
    if (dividend % elem === 0) {
      res = true;
    }
  });
  return res;
}

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(elem => canBeDivided(elem, collection_b));
}

module.exports = choose_divisible_integer;
