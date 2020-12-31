// finding minimum number of array
function minimum (array) {
  let min = null;
  if (array) {
    for (let i = 0; i < array.length; i++)  {
      if (typeof array[i] === 'number' && !isNaN(array[i]))  {
        if (typeof min !== 'number') {
          min = array[i];
        } else {
          array[i] < min ? min = array[i] : false;
        }
      } else {
        continue;
      }
    }
    return min;
  } else {
    return min;
  }
}

// finding maximum number of array
function maximum (array) {
  let max = null;
  if (array) {
    for (let i = 0; i < array.length; i++)  {
      if (typeof array[i] === 'number' && !isNaN(array[i]))  {
        if (typeof max !== 'number') {
          max = array[i];
        } else {
          array[i] > max ? max = array[i] : false;
        }
      } else {
        continue;
      }
    }
    return max;
  } else {
    return max;
  }
}

// finding sum numbers of array
function adding (array) {
  let sum = null;
  if (array) {
    for (let i = 0; i < array.length; i++)  {
      if (typeof array[i] === 'number' && !isNaN(array[i]))  {
        if (typeof sum !== 'number') {
          sum = array[i];
        } else {
          sum += array[i];
        }
      } else {
        continue;
      }
    }
    return sum;
  } else {
    return sum;
  }
}

const minMaxSum = (array) => {
  if (array) {
    return `min = ${minimum(array)}, max = ${maximum(array)}, sum = ${adding(array)}`;
  } else {
    return null;
  }
}

console.log(minMaxSum([3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]));
console.log(minMaxSum([-1,-8,-2]));
console.log(minMaxSum([1,7,3]));
console.log(minMaxSum([1,undefined,3,5,-3]));
console.log(minMaxSum([1,NaN,3,5,-3]));
console.log(minMaxSum());
console.log(minMaxSum([true,NaN,25,6,false, undefined,[],null,{},-5]));