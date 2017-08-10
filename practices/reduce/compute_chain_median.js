'use strict';

function getMedian(numbers) {
  let res;
  let length = numbers.length;
  if (length === 1) {
    return numbers[0];
  }
  if (length % 2 === 1) {
    res = numbers[parseInt(length / 2)];
  } else {
    res = (numbers[length / 2 - 1] + numbers[length / 2]) / 2;
  }
  return res;
}

function compute_chain_median(collection) {
  let numbers = collection.split("->").map(elem => parseInt(elem)).sort((a, b) => a - b);
  return getMedian(numbers);
}

module.exports = compute_chain_median;
