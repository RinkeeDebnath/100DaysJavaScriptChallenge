//*--------------------------------------------
//*  Interview Question
//*--------------------------------------------

//? Write a function to calculate the sum of squares of all elements in an array. For example, given the array [1,2,3], the function should return 14 bcz 1*1 + 2*2 + 3*3 = 14

// Solution:
sumOfSquares = (array) => {
  const sum = array.reduce((acc, curr) => (acc += Math.pow(curr, 2)), 0);
  return sum;
};

// sumOfSquares = (array) => {
//   const sum = array.reduce((acc, curr) => {
//     acc += Math.pow(curr, 2);
//     return acc;
//   }, 0);
//   return sum;
// };

// Example usage:
console.log(sumOfSquares([1, 2, 3]));
console.log(sumOfSquares([7, 4, 8]));
