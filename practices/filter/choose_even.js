'use strict';

function choose_even(collection) {
  return collection.filter(elem => elem % 2 === 0);
}

module.exports = choose_even;
