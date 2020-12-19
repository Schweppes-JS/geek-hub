// mySort
Array.prototype.mySort = function (compare) {

  const currentArray = this;
  const arrayOfUndefined = [];
  let newArray = [];
  let utfArray = [];
  let utfSumArray = [];
  let elementToString = '';
  let utfSumString = '';

  // Creating array with UTF value each element of main Array
  function convertingToUTF (string) {
    if (compare === 'compare') {
      for (let j = 0; j < string.length; j++) {
        utfSumString += string[j].charCodeAt().toString();
      }
      if (utfSumString === '') {
        utfArray.push(0)
      } else {
        utfArray.push(parseInt(utfSumString));
      }
      elementToString = '';
      utfSumString = '';
    }
    else {
      for (let j = 0; j < string.length; j++) {
        utfSumArray.push(string[j].charCodeAt());
      }
      if (utfSumArray === []) {
        utfArray.push(0)
      } else {
        utfArray.push(utfSumArray);
      }
      elementToString = '';
      utfSumArray = [];
    }
  }

  // Converting each elements to string
  function convertingToString () {
    for (let i = 0; i < currentArray.length; i++) {
      // if main Array has undefined put this element in another array
      if (currentArray[i] === undefined) {
        arrayOfUndefined.push(currentArray[i]);
        // push and delete element for creating empty slot and safe index of "undifined"
        utfArray.push(currentArray[i]);
        delete utfArray[i];
        continue;
      }
      // if main Array has null convert this element to string
      else if (currentArray[i] === null) {
        elementToString = 'null';
      } 
      // In another situation
      else {
        elementToString = currentArray[i].toString();
      }
      convertingToUTF(elementToString);
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
      const min = searchingMin(utfArray);
      for (let i = 0; i < currentArray.length; i++) {
        if (min === utfArray[i]) {
          newArray.push(currentArray[i]);
        }
      }
      for (let i = 0; i < utfArray.length; i++) {
        if (utfArray[i] == min) {
          delete utfArray[i];
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
      const min = searchingMin(utfArray);
      for (let i = 0; i < currentArray.length; i++) {
        if (min === utfArray[i]) {
          newArray.push(currentArray[i]);
        }
      }
      for (let i = 0; i < utfArray.length; i++) {
        if (utfArray[i] == min) {
          delete utfArray[i];
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
    const amountOfIterators = utfArray.length - arrayOfUndefined.length;
    pushingMinUTF(amountOfIterators);
    // concatenate filtered array with undefined elements
    newArray = newArray.concat(arrayOfUndefined);
    // changing passed array
    for (let i = 0; i < this.length; i++) {
      this[i] = newArray[i];
    }
    return this;
  }
  // sort main array without compair function
  else {
    convertingToString();
    // We need to know how many time we must perform sorting without regard to "undefined"
    const amountOfIterators = utfArray.length - arrayOfUndefined.length;
    // finding element that has least UTF and push him in new array
    pushingMinUTF(amountOfIterators);
    // concatenate filtered array with undefined elements
    newArray = newArray.concat(arrayOfUndefined);
    // changing passed array
    for (let i = 0; i < this.length; i++) {
      this[i] = newArray[i];
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