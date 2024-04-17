//*------------------------------------------------------
//*  Coding Challenge: Find the Minimum Value in an array
//*------------------------------------------------------

// ? Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array

// * Constraints:
// ? The input array may contain both +ve & -ve integers.
// ? The input may be empty.
// ? The input array may contain duplicate values.

// Solution 1:
// const findMin = (array) => {
//   array.sort((a, b) => a - b);
//   return array[0];
// };

// Solution 2:
const findMin = (array) => {
  if (array.length === 0) {
    return "Empty Array";
  }
  return Math.min(...array);
};

// Example Usage:
console.log(findMin([5, 10, 2, 8])); // Output: 2
console.log(findMin([5, -3, 0, 12, -7])); // Output:-7
console.log(findMin([])); // Output: undefined (or any suitable message for empty array)
console.log(findMin([-5, 8, -5, 2, 0, -1])); // Output: -5

// * Note:
// ? Ensure the function handles edge cases gracefully, such as an empty input array.
// ? Consider using ES6 features like spread syntax (...) for a concise implementation
