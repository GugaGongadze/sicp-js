// f(n) = n | n < 3
// f(n) = f(n - 1) + 2f(n - 2) + 3f(n - 3) | n >= 3

function f_iter(a, b, c, n) {
  if (n < 3) return n;

  return f_iter(c, 2 * b, 3 * a, n - 1);
}

function f(n) {
  if (n < 3) return n;

  return f(n - 1) + 2 * f(n - 2) + 3 * f(n - 3);
}

console.log(f(2));
