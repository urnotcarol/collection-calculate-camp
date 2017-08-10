'use strict';
var number_map_to_word = function(collection){
  return collection.map(x => String.fromCharCode("a".charCodeAt(0) - 1 + x));
};

module.exports = number_map_to_word;
