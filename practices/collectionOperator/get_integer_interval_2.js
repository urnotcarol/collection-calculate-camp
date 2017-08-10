'use strict';

function pushEven(res, i) {
  if (i % 2 === 0) {
    res.push(i);
  }
}

function get_integer_interval_2(number_a, number_b) {
  let res = [];
  if (number_a <= number_b) {
    for (let i = number_a; i <= number_b; i++) {
      pushEven(res, i);
    }
  } else {
    for (let i = number_a; i >= number_b; i--) {
      pushEven(res, i);
    }
  }

  return res;
}

module.exports = get_integer_interval_2;
