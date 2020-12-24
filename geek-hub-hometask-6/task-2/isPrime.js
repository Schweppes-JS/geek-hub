function isPrime(number) {
  if (number < 2) return false;
  else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
      else return true
    }
  }
}

console.log(isPrime(0));                          // false
console.log(isPrime(1));                          // false
console.log(isPrime(17));                         // true
console.log(isPrime(10000000000000));             // false
console.log(isPrime(149));                        // true


