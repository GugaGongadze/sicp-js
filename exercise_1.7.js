const { sqrt } = require('./utils');

console.log(sqrt(0.00000001));
console.log(Math.sqrt(0.00000001));
// For very small numbers `is_good_enough` becomes inadequate
// for its use of 0.001 for checking how good a guess is.

console.log(sqrt(300000000000000));
console.log(Math.sqrt(300000000000000));
// For very large numbers we encounter a stack overflow
