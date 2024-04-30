// *------------------------------
// * Coding Challenge
// *------------------------------

// ? Write a function to reverse a string without using any built-in methods or libraries. The function should take a string as input and return the reversed string.

const reverseString = (str) => {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    //  String concatenation
    revStr += str[i];
  }
  return revStr;
};

// Example usage:
console.log(reverseString("Hello")); // Output: olleH
