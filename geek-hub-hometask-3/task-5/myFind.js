// myFind
Array.prototype.myFind = function (callBack, context) {
    let index = 0;
    if (context) {
        while (index < this.length) {
            const result = callBack(context[index], index, context);
            if (result === undefined) {
                index++;
            }
            else {
                break;
            }
        }
        return context[index];
    }
    else {
        while (index < this.length) {
            const result = callBack(this[index], index, this);
            if (result === undefined) {
                index++;
            }
            else {
                break;
            }
        }
        return this[index];
    }
}
// Example for 'myFind' and JS 'Find' functions
let arr = [-6, 4, true, 2, 3, [6]];
function findTrue (elem) {
    if (elem === true) return elem;
}
console.log(arr.find(findTrue));
console.log(arr.myFind(findTrue));