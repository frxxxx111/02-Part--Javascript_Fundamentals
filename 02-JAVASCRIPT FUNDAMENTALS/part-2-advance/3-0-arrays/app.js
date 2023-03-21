'use strict';
const c = console.log.bind(this);

// Exercise #1
//  Create a function called arrayFromRange() that takes two arguments, min and max, and returns an array of numbers from min to max.
function arrayFromRange(min, max){
    const range = [];
    for (let i = min; i <= max; i++){
        range.push(i);
    }
    return range;
}

const myArray = arrayFromRange(1, 5);
console.log(myArray); // Output: [1, 2, 3, 4, 5]

// Exercise #2
// Create a function called includes() that takes two arguments, array and searchElement, and returns true if the searchElement is in the array, otherwise returns false.
function includes(array, searchElement) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === searchElement) {
        return true;
      }
    }
    return false;
  }

  const fruits = ['apple', 'banana', 'orange', 'kiwi'];
console.log(includes(fruits, 'banana')); // true
console.log(includes(fruits, 'grape')); // false

// Exercise #3
// Create a function called except() that takes two arguments, array and excluded, and returns an array with all the elements of the array except the excluded elements.
function except(array, excluded) {
    return array.filter(element => !excluded.includes(element));
  }

  const numbers = [1, 2, 3, 4, 5];
const excludedNumbers = [2, 4];
const filteredNumbers = except(numbers, excludedNumbers);
console.log(filteredNumbers); // [1, 3, 5]

// Exercise #4
// Create a function called move() that takes three arguments, array, index, offset, and returns the array with the element at the index moved to the offset.
function move(array, index, offset) {
    const element = array.splice(index, 1)[0];
    array.splice(index + offset, 0, element);
    return array;
  }

  const colors = ['red', 'green', 'blue', 'yellow'];
move(colors, 1, 2);
console.log(colors); // ['red', 'blue', 'yellow', 'green']

// Exercise #5
// Create a function called countOccurrences() that takes two arguments, array and searchElement, and returns the number of times the searchElement appears in the array.
function countOccurrences(array, searchElement) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === searchElement) {
        count++;
      }
    }
    return count;
  }

  const num = [1, 2, 3, 2, 4, 2, 5];
console.log(countOccurrences(num, 2)); // 3
console.log(countOccurrences(num, 6)); // 0

// Exercise #6
// Create a function called getMax() that takes an array of numbers and returns the maximum number in the array.
function getMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    return max;
  }
  
  const n = [2, 5, 1, 6, 3, 4];
console.log(getMax(n)); // 6

// Exercise #7
// Create a function called movies() that takes an array of movies and returns an array of movies that have a rating of 5.0.
function movies(movieList) {
    // Filter the array of movies to only include those with a rating of 5.0
    return movieList.filter(movie => movie.rating === 5.0);
  }

  const movieList = [
{
    title: 'example movie name', rating: 9.0
},
{
    title: 'example movie name', rating: 7.0
},
{
    title: 'example movie name', rating: 8.4
},
{
    title: 'example movie name', rating: 5.0
},
  ];

  const topMovies = movies(movieList);
  console.log(topMovies);