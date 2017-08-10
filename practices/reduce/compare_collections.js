'use strict';

function compare_collections(collection_a, collection_b) {
  let res = false;
  if (collection_a.length === collection_b.length) {
    res = true;
    for (let i = 0; i < collection_a.length; i++) {
      if (collection_a[i] !== collection_b[i]) {
        res = false;
        break;
      }
    }
  }
  return res;
}

module.exports = compare_collections;
