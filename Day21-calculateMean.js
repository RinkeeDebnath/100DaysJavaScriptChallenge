// *------------------------------
// * Coding Challenge
// *------------------------------

// ? Write a function called calculateMean that takes an array of numbers as input and returns the mean (average ) of those numbers.

// ? Constraints:
// ? The input array may contain positive and negative integers.
// ? The input array may be empty. If it is empty, the function should return 0;

function calculateMean(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}

console.log(calculateMean([1, 2, 3, 4, 5]));
console.log(calculateMean([10, 20, 30]));
console.log(calculateMean([-1, 0, 1]));
console.log(calculateMean([]));
