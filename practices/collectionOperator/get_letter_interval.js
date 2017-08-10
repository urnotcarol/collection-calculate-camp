'use strict';

function get_letter_interval(number_a, number_b) {
  var res = [];
  if (number_a <= number_b) {
    for (let i = number_a; i <= number_b; i++) {
      res.push(String.fromCharCode("a".charCodeAt(0) - 1 + i));
    }
  } else {
    for (let i = number_a; i >= number_b; i--) {
      res.push(String.fromCharCode("a".charCodeAt(0) - 1 + i));
    }
  }
  return res;
}


module.exports = get_letter_interval;
