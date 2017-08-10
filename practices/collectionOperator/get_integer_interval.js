'use strict';

function get_integer_interval(number_a, number_b) {
  let res = [];
  if (number_a <= number_b) {
    for (let i = number_a; i <= number_b; i++) {
      res.push(i);
    }
  } else {
    for (let i = number_a; i >= number_b; i--) {
      res.push(i);
    }
  }
  return res;
}

module.exports = get_integer_interval;
