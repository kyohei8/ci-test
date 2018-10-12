const _ = require('lodash');

function test(arr){
  return _.chunk(arr, 2);
}

const res = test(['a', 'b', 'c', 'd']);
// => [['a', 'b'], ['c', 'd']]
console.log(res);
