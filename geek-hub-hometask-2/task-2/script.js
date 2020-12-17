function waterCounting (array) {
  let startWater = null;
  let endWater = null;
  let isWater = false;
  let counter = 0;
  // finding the highest hill
  const maxHill = Math.max(...array);
  const indexMax = array.indexOf(maxHill);
  // divide the array into two parts relative to the highest hill
  const leftHalf = array.slice(0, indexMax+ 1);
  const rightHalf = array.slice(indexMax, array.length);
  //expand the array as the algorithm only works from left to right
  rightHalf.reverse();
  // water search algorithm
  const reducer = (accumulator, currentValue, index, currentArray) => {
    // checking if it slope
    if (currentValue > currentArray[index + 1]) {
      // checking if after the slope is there a higher or flat hill
      if (!isWater) {
        // finding higher or flat hill
        for (let i = index + 1; i < currentArray.length; i++) {
          // checking each next step
          if (array[i] >= currentValue) {
            // when higher or flat hill was found set water border
            if (currentValue > startWater) {
              startWater = currentValue;
            }
            endWater = currentArray[i];
            // set marker that water was found
            isWater = true; 
            return accumulator;
          } 
          // if higher or flat hill wasn't found set marker that there is no water
          else {
            isWater = false;
          }
        }
      } 
      // if water already exists
      else {
        // add the height difference between the beginning of the water and the current depth
        return accumulator += (startWater - currentValue);
      }
      return accumulator;
    }
    // checking if it hill climb
    else if (currentValue < currentArray[index + 1]) {
      // if water already exists
      if (isWater) {
        // checking if next hill is above the water level
        if (currentArray[index + 1] >= startWater) {
          // set that water is over
          isWater = false;
        }
        // add the height difference between the beginning of the water and the current depth
        return accumulator += (startWater - currentValue);
      } 
      // if it hill climb without water just not doing nothing
      else {
        return accumulator;
      }
    }
    // checking when height not change
    else {
      if (currentValue < startWater) {
        // if water already exists
        if (isWater) {
          // add the height difference between the beginning of the water and the current depth
          return accumulator += (startWater - currentValue);
        }
        // if it plain without water just not doing nothing
        else {
          return accumulator;
        }
      }
      return accumulator;
    }
  };
  counter += leftHalf.reduce(reducer, 0);
  // set the default values ​​for counting water in the other part
  startWater = null;
  endWater = null;
  isWater = false;
  counter += rightHalf.reduce(reducer, 0);
  return counter;
}

console.log(waterCounting([2, 1, 5, 0, 3, 4, 7, 7, 2, 3, 1, 0])); // expected 10
console.log(waterCounting([2, 5, 1, 3, 1, 2, 1, 7, 7, 6])); // expected 17
console.log(waterCounting([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0])); // expected 10
console.log(waterCounting([7, 0, 1, 3, 4, 1, 2, 1])); // expected 9
console.log(waterCounting([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] )); // expected 10
console.log(waterCounting([2, 2, 1, 2, 2, 3, 0, 1, 2])); // expected 4
console.log(waterCounting([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8])); // expected 24
console.log(waterCounting([2, 2, 2, 2, 2])); // 0
console.log(waterCounting([5, 0, 5, 0, 10, 0, 10 ,0 ,10])); // expected 30