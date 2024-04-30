// *------------------------------
// * Coding Challenge
// *------------------------------

// ? Write a function to check if a given string starts with a specific sunstring.

// ? str: A string (e.g, "Hello world")
// ? subStr: A substring to check if it starts the given string (e.g. "Hello")
// ? Output: true if the given string starts with the specified substring, otherwise false.

const startsWith = (str, subStr) => {
  // Method 1: Built-in method
  //   return str.toLowerCase().startsWith(subStr.toLowerCase());
  //   Method 2:
  return str.slice(0, subStr.length).toLowerCase() === subStr.toLowerCase();
};

// Example usage:
console.log(startsWith("Hello world", "hello")); // Output: true
console.log(startsWith("Hello world", "World")); // Output: false
