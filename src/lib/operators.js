export function sum(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export function multi(a, b) {
  return a * b;
}

export function div(a, b) {
  return a / b;
}

export function countDigits(n) {
  let count = 0;
  if (n < 0) {
    ++count;
    n = n * -1;
  }
  if (n >= 0) ++count;
  while (n / 10 >= 1) {
    n /= 10;
    ++count;
  }
  return count;
}
console.log(countDigits(12112));

console.log(countDigits(457));
console.log(countDigits(-42));
