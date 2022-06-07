const { improve, is_good_enough } = require('./utils');

const conditional = (predicate, then_clause, else_clause) =>
  predicate ? then_clause : else_clause;

const sqrt_iter = (guess, x) => {
  return conditional(is_good_enough(guess, x), guess, sqrt_iter(improve(guess, x), x));
};

// This will result in stack overflow because JS uses applicative-order evaluation model
// Meaning sqrt_iter will get evaluated again and again.
