// We are conditionally applying one function or another to given arguments.
const plus = (a, b) => a + b;
const minus = (a, b) => a - b;
const a_plus_abs_b = (a, b) => (b >= 0 ? plus : minus)(a, b);
