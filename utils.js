const is_good_enough = (guess, x) => abs(square(guess) - x) < 0.001;
const square = (x) => x * x;
const abs = (x) => (x >= 0 ? x : -x);
const improve = (guess, x) => average(guess, x / guess);
const average = (x, y) => x + y / 2;
const sqrt_iter = (guess, x) =>
  is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
const sqrt = (x) => sqrt_iter(1, x);

module.exports = {
  is_good_enough,
  square,
  abs,
  improve,
  average,
  sqrt,
};
