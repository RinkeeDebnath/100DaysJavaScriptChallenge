// Write a function that takes a number as input and returns the sum of its digits.

// Method 1 : converting them to string
// function sumOfDigits(num) {
//   let sum = 0;
//   while (num) {
//     sum = sum + (num % 10);
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }

// Method 2 : using reduce
function sumOfDigits(num) {
  let arr = Array.from(String(num), Number);
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

// Example usage:
console.log(sumOfDigits(1234));
console.log(sumOfDigits(4321));
console.log(sumOfDigits(123456));

// Constraints:

// The input number will always be a positive number.
// The input numbers can have multiple digits.
// The output should be the sum of all the digits in the input number.
