'use strict';

function get_union(collection_a, collection_b) {
  collection_a.push(...(collection_b.filter(elem => !collection_a.includes(elem))));
  return collection_a;
}

module.exports = get_union;
