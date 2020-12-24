function missing(array) {
  // if array length more than zero
  if (array) {
    let max = array[0];
    let min = array[0];
    // finding minimum and maximum of array
    for (let i = 0; i < array.length; i++) {
      if (array[i] > max) max = array[i];
      if (array[i] < min) min = array[i];
    }
    // set the next expected digit after the minimum
    let nextMin = min + 1;
    // if if minimum more than 1 means that 1 is missing in the array
    if (min > 1) {
      return 1;
      // finding missing number
    } else {
      // seek until the minimum and maximum are equal
      while (min <= max) {
        // if equal return undefined
        if (min === max) return;
        else {
          // check the array for a number greater than minimum
          for (let j = 0; j < array.length; j++) {
            // if this number was found
            if (nextMin === array[j]) {
              min++;
            }
          }
          // after the cycle check if the number that was found is really equal to the following
          if (min === nextMin) {
            // if it's true - go to the next check step
            nextMin++;
            continue;
            // otherwise return the expected number
          } else return nextMin;
        }
      }
    }
  } else return;
}

console.log(missing([]));                          // undefined
console.log(missing([1, 4, 3]));                   // 2
console.log(missing([2, 3, 4]));                   // 1
console.log(missing([5, 1, 4, 2]));                // 3
console.log(missing([1, 2, 3, 4]));                // undefined


