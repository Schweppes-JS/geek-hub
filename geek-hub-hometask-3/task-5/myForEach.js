// myForEach
Array.prototype.myForEach = function (callBack, context, index = 0) {
  if (index < this.length) {
    function cycle (array) {
      callBack(array[index], index, array);
      index++;
      array.myForEach(callBack, array, index);
    }
    context ? cycle(context) : cycle(this);
  }
  return;
}
// Example for 'myForEach' and JS 'forEach' functions
let arr = [1,2,3];
console.log(arr.myForEach((elem) => console.log(elem *3)))
console.log(arr.forEach((elem) => console.log(elem *3)))