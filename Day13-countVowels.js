/* 
    Write a function that takes a string as input and returns the count of vowels in that string. Consider "a","e","i","o" and "u" as vowels (both lower and uppercase).
*/

// Solution:
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  str = str.split("");
  for (const char of str) {
    if (vowels.includes(char.toLowerCase())) {
      vowelCount += 1;
    }
  }
  return vowelCount;
}

// Example Usage:
console.log(countVowels("Hello world")); // Output: 3
console.log(countVowels("ThE quIck brOwn fOx")); // Output: 5
console.log(countVowels("Brrrp")); // Output: 0

// Contraints:
// The input string may contain letters in both uppercase & lowercase.
// The output should be a non-negative integer representing the count of vowels in the input string.
