// myMap
Array.prototype.myMap = function (callBack, context, index = 0, newArray = []) {
  if (index < this.length) {
    if (context) {
      const result = callBack(context[index], index, context);
      newArray.push(result);
      index++;
      this.myMap(callBack ,context , index, newArray);
    } else {
      const result = callBack(this[index], index, this);
      newArray.push(result);
      index++;
      this.myMap(callBack ,context , index, newArray);
    }
  }
  return newArray;
}
// Example for 'myMap' and JS 'map' functions
let arr = [1,2,3];
console.log(arr.myMap((elem) => elem *3))
console.log(arr.map((elem) => elem *3))