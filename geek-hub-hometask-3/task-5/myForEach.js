// myForEach
Array.prototype.myForEach = function (callBack, context, index = 0) {
  if (index < this.length) {
    if (context) {
      callBack(context[index], index, context);
      index++;
      this.myForEach(callBack, context, index);
    } else {
      callBack(this[index], index, this);
      index++;
      this.myForEach(callBack ,context , index);
    }
  }
  return;
}
// Example for 'myForEach' and JS 'forEach' functions
let arr = [1,2,3];
console.log(arr.myForEach((elem) => console.log(elem *3)))
console.log(arr.forEach((elem) => console.log(elem *3)))