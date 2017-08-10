'use strict';

function getMedian(numbers) {
  let res;
  let length = numbers.length;
  if (length === 1) {
    return numbers[0];
  }
  if (length % 2 === 1) {
    console.log("ha");
    res = numbers[parseInt(length / 2)];
  } else {
    res = (numbers[length / 2 - 1] + numbers[length / 2]) / 2;
  }
  return res;
}

function compute_median(collection) {
  collection.sort((a, b) => a - b);
  return getMedian(collection);
}

module.exports = compute_median;
