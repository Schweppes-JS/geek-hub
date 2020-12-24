function indexOf(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return 0;
    } else {
      if (i === array.length - 1) return -1;
      else continue;
    }
  }
}

console.log(indexOf([1, 2, 3], 1))               // 0
console.log(indexOf([1, 2, 3], 4))               // -1
