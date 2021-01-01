// myMap
Array.prototype.myMap = function (callBack, context, index = 0, newArray = []) {
  if (index < this.length) {
    function cycle (array) {
      const result = callBack(array[index], index, array);
      newArray.push(result);
      index++;
      array.myMap(callBack, array, index, newArray);
    }
    if (context) {
      cycle(context);
    } else {
      cycle(this);
    }
  }
  return newArray;
}
// Example for 'myMap' and JS 'map' functions
let arr = [1,2,3];
console.log(arr.myMap((elem) => elem *3))
console.log(arr.map((elem) => elem *3))