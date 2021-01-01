// myFind
Array.prototype.myFind = function (callBack, context) {
    let index = 0;
    function cycle(array) {
        while (index < array.length) {
            const result = callBack(array[index], index, array);
            if (!result) {
                index++;
            }
            else {
                break;
            }
        }
        return array[index];
    }
    if (context) {
        return cycle(context);
    }
    else {
        return cycle(this);
    }
}
// Example for 'myFind' and JS 'Find' functions
let arr = [-6, 4, true, 2, 3, [6]];
function findTrue (elem) {
    if (elem === true) return elem;
}
console.log(arr.find((findTrue)));
console.log(arr.myFind((findTrue)));