//* --------------------------------------------------
//* Interview Question: Count Occurances of Characters
//* --------------------------------------------------

//! Task:
//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

function countChar(word, char) {
  word = word.toLowerCase();
  char = char.toLowerCase();

  let totalCount = word.split("").reduce((acc, curr) => {
    if (curr === char) {
      acc++;
    }
    return acc;
  }, 0);
  return totalCount;
}

console.log(countChar("missISsipPI", "I"));

//todo Constarinst:
//? The function should be case-sensitive.
//? The function should handle both lowercase and uppercase characters.
//? The character parameter can be any printable ASCII character
