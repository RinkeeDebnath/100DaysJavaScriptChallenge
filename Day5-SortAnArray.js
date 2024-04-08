//* --------------------------------------------------
//* Programming Question: Sort an Array
//* --------------------------------------------------

// ? Write a function to sort an array of numbers in an ascending order.

// Method 1:
// function sortAscending(array) {
//   const sortedArray = array.sort((a, b) => a - b);
//   return sortedArray;
// }

// Method 2:
function sortAscending(array) {
  // Cloned array
  const sortedArray = [...array];

  // Bubble sort
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = 0; j < sortedArray.length; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        // Swap elements
        let temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
      }
    }
  }

  return sortedArray;
}

console.log(sortAscending([5, 3, 10, 8]));
console.log(typeof sortAscending([2]));

//todo Requirements:
//? The function should take an array of numbers as input.
//? It should return a new array with the numbers sorted in ascending order.
//? The original array should remain unchanged.
//? You are not allowed to use the Built-in sort() method
