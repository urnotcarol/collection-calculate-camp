'use strict';

function getReleventLetter(num) {
  let digits = [];

  while (num > 0) {
    let quotient = parseInt(num / 26);
    let remainder;
    if (num % 26 === 0) {
      remainder = 26;
      num = quotient - 1;
    } else {
      remainder = num % 26;
      num = quotient;
    }
    digits.push(remainder);
  }

  let letters = digits.map(digit => String.fromCharCode("a".charCodeAt(0) - 1 + digit));
  let res = "";
  for (let i = letters.length - 1; i >= 0; i--) {
    res += letters[i];
  }

  return res;
}

var number_map_to_word_over_26 = function(collection){
  return collection.map(elem => getReleventLetter(elem));
};

module.exports = number_map_to_word_over_26;
