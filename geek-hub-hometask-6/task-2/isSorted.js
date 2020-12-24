function isSorted(array) {
  if (array.length > 0) {
    for (let i = 1; i < array.length; i++) {
      if (array[i] > array[i - 1]) {
        if (i === (array.length - 1)) return true;
        else continue;
      } else return false;
    }
  } else return true;
}

console.log(isSorted([]))                        // true
console.log(isSorted([-Infinity, -5, 0, 3, 9]))  // true
console.log(isSorted([3, 9, -3, 10]))            // false
