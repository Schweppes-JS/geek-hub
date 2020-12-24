function factorial(number) {
  let sum = 1;
  for (let i = 1; i <= number; i++) {
    sum = sum * i;
  }
  return sum;
}

console.log(factorial(0))                        // 1
console.log(factorial(1))                        // 1
console.log(factorial(6))                        // 720
