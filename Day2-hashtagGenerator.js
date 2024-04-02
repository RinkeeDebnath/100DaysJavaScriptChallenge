//* -----------------------------------------------
//* Programming Question: Hash Tag Generator
//* -----------------------------------------------

//? You are required to implement a function generateHash that generates a hash tag from a given input string.
// The hash tag should be constructed as follows:

//? The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.
//? If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.
//? Otherwise, the function should return the generated hash tag prefixed with #.

//* write a function generatellash to accomplish this task.

function generateHash(str) {
  if (str.length > 280 || str.trim().length === 0) {
    return false;
  }

  // Converting string to array of string
  str = str.split(" ");

  const strArray = [];

  // Replacing 1st letter of each word by its UpperCase
  str.map((word) => {
    // strArray.push(word.replace(word[0], word[0].toUpperCase()));
    strArray.push(word.replace(word[0], word[0].toUpperCase()));
  });

  // Generating hashtag - converting array of strings to string
  const hashTag = `#${strArray.join("")}`;

  return hashTag;
}

console.log(generateHash("my name is rinkee debnath"));
