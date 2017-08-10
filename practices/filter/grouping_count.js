'use strict';

function grouping_count(collection) {
  let res = {};
  collection.forEach(elem => {
    if (Object.keys(res).includes(elem.toString())) {
      res[elem]++;
    } else {
      res[elem] = 1;
    }
  });
  return res;
}

module.exports = grouping_count;
