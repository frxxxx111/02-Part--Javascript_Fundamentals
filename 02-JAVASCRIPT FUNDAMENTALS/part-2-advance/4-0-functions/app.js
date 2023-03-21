// Exercise #1
// Create a function called sum that takes multiple arguments and returns the sum of all the arguments.
// sum(1, 2, 3, 4, 5) -> 15
// determine if the argument is an array
// use Array.isArray()
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      if (Array.isArray(arguments[i])) {
        total += sum.apply(null, arguments[i]);
      } else {
        total += arguments[i];
      }
    }
    return total;
  }

  console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Exercise #2
// Create a function called circle that takes a radius as an argument.
// The function should return an object that has two properties: area and circumference.
// area -> πr^2
// circumference -> 2πr

// Exercise #3
// countOccurrences -> takes an array and search element as arguments.
// The function should return the number of occurrences of the given element in the array.
// countOccurrences([1, 2, 3, 4, 1], 1) -> 2
// if the element is not in the array, return 0
// if the array is empty, return 0
// if the array is not an array, return 0
// use try and catch to handle errors
function countOccurrences(arr, search) {
    try {
      if (!Array.isArray(arr)) {
        throw new Error('The first argument must be an array');
      }
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
          count++;
        }
      }
      return count;
    } catch (error) {
      console.log(error.message);
      return 0;
    }
  }

  console.log(countOccurrences([1, 2, 3, 4, 1], 1)); // Output: 2
console.log(countOccurrences(['apple', 'banana', 'apple', 'orange'], 'manggo')); // Output: 0
console.log(countOccurrences([], 'apple')); // Output: 0
console.log(countOccurrences([]))