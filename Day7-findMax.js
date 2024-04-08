// Write a function that takes an array of numbers as input and returns the maximum number in the array.

// Method 1 : using Math.max()
function findMax(array) {
  return Math.max(...array);
}

// Method 2 : using bubble sort
// function findMax(array) {
//   const newArray = [...array];
//   for (let i = 0; i < newArray.length; i++) {
//     for (let j = 0; j < newArray.length; j++) {
//       if (newArray[j] < newArray[j + 1]) {
//         let temp = newArray[j];
//         newArray[j] = newArray[j + 1];
//         newArray[j + 1] = temp;
//       }
//     }
//   }
//   return newArray[0];
// }

// Method 3 : using sort
// function findMax(array) {
//   const newArray = [...array];
//   newArray.sort((a, b) => b - a);
//   return newArray[0];
// }

// Example Usage:
console.log(findMax([1, 5, 3, 9, 2])); // Output: 9
console.log(findMax([-10, -5, -3, -9, -2])); // Output: -2
console.log(findMax([5])); // Output: 5
