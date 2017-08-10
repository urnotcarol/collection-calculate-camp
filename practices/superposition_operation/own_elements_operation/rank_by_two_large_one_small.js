'use strict';
function rank_by_two_large_one_small(collection){
  let res = [];
  collection.sort((a, b) => a - b > 0);
  let index = 0;
  let len = collection.length;
  while (index + 3 <= len) {
    res.push(collection[index + 1], collection[index + 2], collection[index]);
    index += 3;
  }
  while (index < len) {
    res.push(collection[index]);
    index++;
  }
  return res;
}
module.exports = rank_by_two_large_one_small;
