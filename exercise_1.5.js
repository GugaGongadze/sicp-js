function p() {
  return p();
}

function test(x, y) {
  return x === 0 ? 0 : y;
}

console.log(test(0, p()));

// If an interpreter uses applicative-order evaluation every argument would get expanded first, which would result in function p calling itself recursively.
// If an interpreter uses normal-order evaluation p() would not get expanded and function invocation would return 0
// JavaScript uses applicative-order evaluation.
