// Write a function that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.

function removeDuplicates(arr) {
  const newArr = [...new Set(arr)];
  return newArr;
}

// Example usage
console.log(removeDuplicates([1, 2, 3, 2, 1, 4])); // Output: [1,2,3,4]
console.log(removeDuplicates([5, 6, 7, 7, 8, 8, 9])); // Output: [5,6,7,8,9]
console.log(removeDuplicates([8, 8, 7, 7, 6, 8, 5])); // Output: [8,7,6,5]
console.log(removeDuplicates([1, 2, 3, 4])); // Output: [1,2,3,4]
console.log(removeDuplicates([])); // Output: []

// the new Set() method in JS creates a new Set object. A set object is a collection of unique values. It can store any type of value, whether primitive values or object refrences.

// Constraints :
// The input array may contain both positiv and negative integers.
// The input may be empty
// The elements in the input array are not guranateed to be sorted.
// The output array should retain the original order of elements from the input array
