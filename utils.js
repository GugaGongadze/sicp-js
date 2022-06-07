const is_good_enough = (guess, x) => abs(square(guess) - x) < 0.001;
const square = (x) => x * x;
const abs = (x) => (x >= 0 ? x : -x);
const improve = (guess, x) => average(guess, x / guess);
const average = (x, y) => x + y / 2;

module.exports = {
  is_good_enough,
  square,
  abs,
  improve,
  average,
};
