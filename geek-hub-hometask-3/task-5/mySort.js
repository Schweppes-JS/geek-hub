// mySort
Array.prototype.mySort = function (compare) {

  const strings = {
    elementToString: '',
    utfSumString: ''
  }
  const arrays = {
    currentArray: this,
    arrayOfUndefined: [],
    newArray: [],
    utfArray: [],
    utfSumArray: []
  }

  // Creating array with UTF value each element of main Array
  function convertingToUTF (string) {
    if (compare === 'compare') {
      for (let j = 0; j < string.length; j++) {
        strings.utfSumString += string[j].charCodeAt().toString();
      }
      if (strings.utfSumString === '') {
        arrays.utfArray.push(0)
      } else {
        arrays.utfArray.push(parseInt(strings.utfSumString));
      }
      strings.elementToString = '';
      strings.utfSumString = '';
    }
    else {
      for (let j = 0; j < string.length; j++) {
        arrays.utfSumArray.push(string[j].charCodeAt());
      }
      if (arrays.utfSumArray === []) {
        arrays.utfArray.push(0)
      } else {
        arrays.utfArray.push(arrays.utfSumArray);
      }
      strings.elementToString = '';
      arrays.utfSumArray = [];
    }
  }

  // Converting each elements to string
  function convertingToString () {
    for (let i = 0; i < arrays.currentArray.length; i++) {
      // if main Array has undefined put this element in another array
      if (arrays.currentArray[i] === undefined) {
        arrays.arrayOfUndefined.push(arrays.currentArray[i]);
        // push and delete element for creating empty slot and safe index of "undifined"
        arrays.utfArray.push(arrays.currentArray[i]);
        delete arrays.utfArray[i];
        continue;
      }
      // if main Array has null convert this element to string
      else if (arrays.currentArray[i] === null) {
        strings.elementToString = 'null';
      } 
      // In another situation
      else {
        strings.elementToString = arrays.currentArray[i].toString();
      }
      convertingToUTF(strings.elementToString);
    }
  };

  // function is finding min number in array of UTF
  function searchingMin (array) {
    let min = null;
    for(let i = 0; i < array.length; i++) {
      if (array[i] === '') {
        min = 0;
        continue;
      }
      if (array[i] == undefined) {
        continue;
      }
      if (min === null) {
        min = array[i];
        continue;
      }
      if (compare === 'compare') {
        if (array[i] < min) {
          min = array[i];
        }
      } else {
        for (let j = 0; j < min.length; j++) {
          if (array[i][j] < min[j]) {
            min = array[i];
            break;
          }
          else if (array[i][j] == min[j]) {
            continue;
          }
          else if (array[i][j] === undefined) {
            min = array[i];
            break;
          }
          else {
            break;
          }
        }
      }
    }
    return min;
  }
  
  // finding element that has least UTF and push him in new array
  function pushingMinUTF (end, start = 0) {
    if (start < end) {
      const min = searchingMin(arrays.utfArray);
      for (let i = 0; i < arrays.currentArray.length; i++) {
        if (min === arrays.utfArray[i]) {
          arrays.newArray.push(arrays.currentArray[i]);
        }
      }
      for (let i = 0; i < arrays.utfArray.length; i++) {
        if (arrays.utfArray[i] == min) {
          delete arrays.utfArray[i];
        }
      }
      start++;
      pushingMinUTF(end, start);
    } else {
      return;
    }
  }
  
  // finding element that has least UTF and push him in new array
  function pushingMinUTF (end, start = 0) {
    if (start < end) {
      const min = searchingMin(arrays.utfArray);
      for (let i = 0; i < arrays.currentArray.length; i++) {
        if (min === arrays.utfArray[i]) {
          arrays.newArray.push(arrays.currentArray[i]);
        }
      }
      for (let i = 0; i < arrays.utfArray.length; i++) {
        if (arrays.utfArray[i] == min) {
          delete arrays.utfArray[i];
        }
      }
      start++;
      pushingMinUTF(end, start);
    } else {
      return;
    }
  }

  // sort main array with compare function
  if (compare === 'compare') {
    convertingToString();
    // We need to know how many time we must perform sorting without regard to "undefined"
    const amountOfIterators = arrays.utfArray.length - arrays.arrayOfUndefined.length;
    pushingMinUTF(amountOfIterators);
    // concatenate filtered array with undefined elements
    arrays.newArray = arrays.newArray.concat(arrays.arrayOfUndefined);
    // changing passed array
    for (let i = 0; i < this.length; i++) {
      this[i] = arrays.newArray[i];
    }
    return this;
  }
  // sort main array without compair function
  else {
    convertingToString();
    // We need to know how many time we must perform sorting without regard to "undefined"
    const amountOfIterators = arrays.utfArray.length - arrays.arrayOfUndefined.length;
    // finding element that has least UTF and push him in new array
    pushingMinUTF(amountOfIterators);
    // concatenate filtered array with undefined elements
    arrays.newArray = arrays.newArray.concat(arrays.arrayOfUndefined);
    // changing passed array
    for (let i = 0; i < this.length; i++) {
      this[i] = arrays.newArray[i];
    }
    return this;
  }
}

// exampler for 'mySort' and JS 'sort' function with compare
let arr = ['80', '9', 'a', 40, 1, NaN];
console.log('with compare');
console.log(arr.mySort('compare'));
console.log(arr.sort((a, b) => a - b));
// exampler for 'mySort' and JS 'sort' function without compare
let array = [undefined, 40, true, 1, 5, 'qt', 'q'];
console.log('without compare');
console.log(array.mySort());
console.log(array.sort());