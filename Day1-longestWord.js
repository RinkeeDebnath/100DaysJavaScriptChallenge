//* -----------------------------------------------
//* Programming Question: Longest Word in a String
//* -----------------------------------------------

//? Q: Write a function findLongestWord that takes a string as input and returns the longest word in the string.
//? If there are multiple longest word, return the first one encountered.

//* Constrainets:
//? The input string may contain alphabetic characters, digits, spaces, and punctuation.
//? The input string is non-empty.
//? The input string mau contain multiple words separated by spaces.

//* Note:
//? If the input string is empty or contains only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.

// Method 1
// const findLongestWord = (str) => {
//   if (str.trim() === "") {
//     return false;
//   }
//   const newStr = str.split(" ");
//   newStr.sort((a, b) => b.length - a.length);
//   return newStr[0];
// };

// Method 2
const findLongestWord = (str) => {
  if (str.trim() === "") {
    return false;
  }
  const newStr = str.split(" ");

  const result = newStr.reduce(
    (accum, curr) => (curr.length > accum.length ? curr : accum),
    ""
  );

  return result;
};

console.log(
  findLongestWord(
    "I watched the people in the park while I sat on the swing, and now I want to write them into a story."
  )
);
