'use strict';

function double_to_one(collection) {
  let res = [];
  collection.forEach(elem => {
    if (typeof(elem) === "number") {
      res.push(elem);
    } else {
      res.push(...elem)
    }
  });
  return res;
}

module.exports = double_to_one;
