function dec(x) {
  return x - 1;
}

function inc(x) {
  return x + 1;
}

// This is a recursive process
function plus(a, b) {
  return a === 0 ? b : inc(plus(dec(a), b));
}

// plus(4, 5)
// inc(plus(3, 5))
// inc(inc(plus(2, 5)))
// inc(inc(inc(plus(1, 5))))
// inc(inc(inc(inc(plus(0, 5)))))
// inc(inc(inc(inc(5))))
// inc(inc(inc(6)))
// inc(inc(7))
// inc(8)
// 9

// This is an iterative process
function plus(a, b) {
  return a === 0 ? b : plus(dec(a), inc(b));
}

// plus(4, 5)
// plus(3, 6)
// plus(2, 7)
// plus(1, 8)
// plus(0, 9)
// 9
