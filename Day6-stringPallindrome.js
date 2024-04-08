// Write a function to determine whether a given string is a pallindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

function isPallindrome(str) {
  str = str.toLowerCase().replace(/\W/g, "");
  let newStr = str.split("").reverse().join("");

  return newStr === str ? true : false;
}

console.log(isPallindrome("A man, a plan, a canal, Panama")); // true
console.log(isPallindrome("racecar")); // false
console.log(isPallindrome("hello")); // false

// -------------------------------------------
// Constraints:
// -------------------------------------------

// The input string may contain letters, digits, spaces, punctuation, and special characters.
// The function should be case-insensitive, meaning "Racecar" and "racecar" should be considered the same.
// Ignore spaces, punctuation, and special characters when determining if a string is a palindrome.
// The function should return true if the input string is a palindrome and false otherwise.
