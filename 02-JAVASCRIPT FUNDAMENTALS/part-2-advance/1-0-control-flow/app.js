'use strict';
const c = console.log.bind(this);

// Exercise #1
// Write a function that takes two numbers and returns the maximum of the two.
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }
  
  let maxNumber = maxOfTwoNumbers(20, 10);
  console.log(maxNumber); // Output: 20
// Exercise #2
// Write a function that determines if a object is on portrait or landscape mode.
function getOrientation(width, height) {
  if (width > height) {
    return "landscape";
  } else {
    return "portrait";
  }
}

let objects = getOrientation(12, 8);
console.log(objects);

// Exercise #3
// Write a function that will take a number and return the FizzBuzz of that number.
// If the number is divisible by 3 return Fizz
// If the number is divisible by 5 return Buzz
// If the number is divisible by 3 and 5 return FizzBuzz
// If the number is not divisible by 3 or 5 return the number
// If the number is not a number return NaN
function fizzBuzz(num) {
  if (typeof num !== 'number') {
    return NaN;
  } else if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  } else if (num % 3 === 0) {
    return 'Fizz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else {
    return num;
  }
}

console.log(fizzBuzz(3));    // Output: Fizz
console.log(fizzBuzz(5));    // Output: Buzz
console.log(fizzBuzz(15));   // Output: FizzBuzz
console.log(fizzBuzz(4));    // Output: 4
console.log(fizzBuzz('abc')) // Output: NaN

// Exercise #4
// Write a function called checkSpeed that takes a speed as an argument.
// If the speed is less than 70 return OK
// If the speed is more than 70 add 5 points to the speed for every 1km/h over the limit.
// If the speed is more than 70 and the points are more than 12 return License Suspended
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed <= speedLimit) {
    return 'OK';
  }

  const points = ((speed - speedLimit) / kmPerPoint);

  if (points >= 12) {
    return 'License Suspended';
  }

  return `Points: ${points}`;
}

console.log(checkSpeed(68));   // Output: OK
console.log(checkSpeed(95));   // Output: Points: 5
console.log(checkSpeed(150));  // Output: License Suspended

// Exercise #5
// Write a function that take an array of numbers as an argument and  determines if a number is ODD or EVEN.
function oddOrEven(array) {

  const result = array.map(num => {
    if (typeof num !== 'number') {
      return 'Invalid';
    }

    return num % 2 === 0 ? 'Even' : 'Odd';
  });

  return result;
}

console.log(oddOrEven([1, 2, 3, 4, 5, 6]));    // Output: [ 'Odd', 'Even', 'Odd', 'Even', 'Odd', 'Even' ]

// Exercise #6
// Write a function that take an array and returns and counts the truthy values in the array.
// Falsy values are: false, 0, '', null, undefined, NaN
// Truthy values are: true, 1, 'a', [], {}, 'false'
// Example: countTruthy([0, null, '', 'Hello', 1, 2, 3]) => 4
function countTruthy(array) {
 
  let count = 0;

  array.forEach(element => {
    if (element) {
      count++;
    }
  });

  return count;
}

console.log(countTruthy([0, null, '', 'Hello', 1, 2, 3])); // Output: 4

// Exercise #7
// Write a function that take an object as an argument and display only the properties with the type string.
// Example: showProperties({name: 'John', age: 30, address: '123 Main St'}) => name, address
function showProperties(obj) {
  for (let i in obj) {
    if (typeof obj[i] === 'string') {
      console.log(i);
    }
  }
}

showProperties({name: 'John', age: 30, address: '123 Main St'}); // Output: name, address
// Exercise #8
// Write a function that take an array of numbers as an argument and returns the sum of the multiples of 3 and 5.
// Multiples of 3 => 3, 6, 9
// Multiples of 5 => 5, 10
function sumMultiples(numbers) {
  let sum = 0;

  for (let number of numbers) {
    if (number % 3 === 0 || number % 5 === 0) {
      sum += number;
    }
  }

  return sum;
}
console.log(sumMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: 33 (3 + 5 + 6 + 9 + 10)

// Exercise #9
// Write a function called calculateGrade that takes an array of marks as an argument and returns the average of the marks.
// If the average is less than 60 return F
// If the average is less than 70 return D
// If the average is less than 80 return C
// If the average is less than 90 return B
// If the average is less than 100 return A
// Example: calculateGrade([80, 80, 50]) => C
function calculateGrade(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  const average = sum / marks.length;
  
  if (average < 60) {
    return "F";
  } else if (average < 70) {
    return "D";
  } else if (average < 80) {
    return "C";
  } else if (average < 90) {
    return "B";
  } else {
    return "A";
  }
}

console.log(calculateGrade([80, 80, 50]));    
// Exercise #10
// Write a function called showStars that takes a number as an argument and display a triangle of stars.
function showStars(num) {
  for (let i = 1; i <= num; i++) {
    let row = '';
    for (let j = 1; j <= num - i; j++) {
      row += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += '*';
    }
    console.log(row);
  }
}

console.log(showStars(5));
// Exercise #11
// Write a function called showPrimes that takes a number as an argument and display all the prime numbers less than or equal to that number.
// Example: showPrimes(20) => 2, 3, 5, 7, 11, 13, 17, 19
// A prime number is a number that is divisible only by itself and 1.
// Example: 2 is a prime number because it is only divisible by 1 and 2.
// Example: 4 is not a prime number because it is divisible by 1, 2, and 4.
function showPrimes(n) {
  const primes = [];

  for (let i = 2; i <= n; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(i);
    }
  }

  return primes;
}


console.log(showPrimes(20).join(", ")); // Output: 2, 3, 5, 7, 11, 13, 17, 19

