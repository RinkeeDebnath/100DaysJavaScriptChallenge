// *------------------------------
// * Coding Challenge
// *------------------------------

// ? Write a function to check if a character is upperCase or lowerCase

// * Constraints
// ? The input char will be a single character
// ? The character can be any printable ASCII character
// ? You can assume that the input will always be a string of length 1

// A = 65, Z = 90
const isUpperCase = (char) => {
  // Method 1:
  // if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
  //   return true;
  // }
  // return false;

  // Method 2:
  return char === char.toUpperCase();
};

// A = 97, Z = 122
const isLowerCase = (char) => {
  // Method 1:
  // if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
  //   return true;
  // }
  // return false;

  // Method 2:
  return char === char.toLowerCase();
};

// Example Usage
console.log(isUpperCase("S")); // Output: true
console.log(isLowerCase("b")); // Output: true

// * Notes:
// ? Ensure that the function correctly identifies uppercase characters based on their ASCII values.
// ? Optimize the function to handle edge cases efficiently
