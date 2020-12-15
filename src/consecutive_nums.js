// How many consecutive numbers are needed?

// Create the function consecutive(arr) that takes an array
// of integers and return the minimum number of integers
// needed to make the contents of arr consecutive from
// the lowest number to the highest number.

// For example:
//If arr contains [4, 8, 6] then the output should be 2 
//because two numbers need to be added to the array 
//(5 and 7) to make it a consecutive array of numbers
// from 4 to 8. Numbers in arr will be unique.

export default function consecutive(arr) {
  if (arr.length < 2){
    return 0;
  }
  
  let sortedArray = arr.sort(function(a, b) {
    return a - b;
  });

  let numberOfElements = 0;

  for (let i = 0; i < sortedArray.length - 1; i++) {
    let diff = sortedArray[i + 1] - sortedArray[i];

    if (diff === 1) {
      continue;
    } 
    numberOfElements += diff - 1;
  }
  
  return numberOfElements;
};
