const sum_of_squares = (a, b) => a * a + b * b;

const larger_2_sum_of_squares = (a, b, c) => {
  if (a <= b && a <= c) return sum_of_squares(b, c);
  if (b <= a && b <= c) return sum_of_squares(a, c);
  if (c <= a && c <= b) return sum_of_squares(a, b);
};
