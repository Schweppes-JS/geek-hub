function fib(index) {
  let currentFibonacci = 1;
  let previousFibonacci = 0;
  let nextFibonacci = 0;
  for (let i = 1; i < index; i++) {
    nextFibonacci = previousFibonacci + currentFibonacci;
    previousFibonacci = currentFibonacci;
    currentFibonacci = nextFibonacci;
  }
  return nextFibonacci;
}

console.log(fib(0));                             // 0
console.log(fib(1));                             // 1
console.log(fib(10));                             // 55
console.log(fib(20));                             // 6765
