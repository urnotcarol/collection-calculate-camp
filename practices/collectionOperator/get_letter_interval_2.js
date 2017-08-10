'use strict';

//返回26及以下的数字对应的字母
function toLetter(num) {
  return String.fromCharCode("a".charCodeAt(0) - 1 + num);
}

//根据数字得出相应的“单词”v1
function getReleventWord1(num) {
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

  let res = "";
  for (let i = digits.length - 1; i >= 0; i--) {
    res += toLetter(digits[i]);
  }

  return res;
}

module.exports = get_letter_interval_2;
// 53 52
// [ 'ba', 'bz', 'ay', 'ax', 'aw', 'av', 'au', 'at', 'as', 'ar', 'aq', 'ap', 'ao', 'an', 'am', 'al', 'ak', 'aj', 'ai', 'ah', 'ag', 'af', 'ae', 'ad', 'ac', 'ab', 'aa', 'z', 'y', 'x', 'w', 'v', 'u', 't' ] to equal
// [ 'ba', 'az', 'ay', 'ax', 'aw', 'av', 'au', 'at', 'as', 'ar', 'aq', 'ap', 'ao', 'an', 'am', 'al', 'ak', 'aj', 'ai', 'ah', 'ag', 'af', 'ae', 'ad', 'ac', 'ab', 'aa', 'z', 'y', 'x', 'w', 'v', 'u', 't' ].
