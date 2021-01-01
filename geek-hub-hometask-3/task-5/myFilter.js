// myFilter
Array.prototype.myFilter = function (callBack, context, index = 0, newArray = []) {
    if (index < this.length) {
      if (context) {
        Boolean(callBack(context[index], index, context)) ? newArray.push(context[index]) : false;
      } else {
        Boolean(callBack(this[index], index, this)) ? newArray.push(this[index]) : false;
      }
      index++;
      this.myFilter(callBack ,context , index, newArray);
    }
    return newArray;
}
// Example for 'myFilter' and JS 'filter' functions
let arr = [-6, 2, 3, 4, true, [6]];
function even (number) {
    if (number % 2 === 0) return number;
}
console.log(arr.myFilter(even));
console.log(arr.filter(even));