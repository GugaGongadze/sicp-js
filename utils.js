function is_good_enough(guess, x) {
  return abs(square(guess) - x) < 0.001;
}

function better_is_good_enough(previous_guess, new_guess, x) {
  if (abs((new_guess - previous_guess) / new_guess) < 0.00000000001) return true;

  return false;
}

function square(x) {
  return x * x;
}

function abs(x) {
  return x >= 0 ? x : -x;
}

function improve(guess, x) {
  return average(guess, x / guess);
}

function average(x, y) {
  return (x + y) / 2;
}

function sqrt_iter(previous_guess, new_guess, x) {
  if (better_is_good_enough(previous_guess, new_guess, x)) return new_guess;

  const improved_guess = improve(new_guess, x);

  return sqrt_iter(new_guess, improved_guess, x);
}

function sqrt(x) {
  return sqrt_iter(undefined, 1, x);
}

module.exports = {
  is_good_enough,
  better_is_good_enough,
  square,
  abs,
  improve,
  average,
  sqrt,
};
