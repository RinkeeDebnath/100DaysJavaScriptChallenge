//*------------------------------------------------------
//*  Coding Challenge
//*------------------------------------------------------

// ? Write a function to convert a string to camelcase & snake-case.

// Solution: for camelCase
const toCamelCase = (str) => {
  str = str.trim().split(" ");

  str = str.map((currElem, index) => {
    if (index === 0) {
      return currElem;
    } else {
      return currElem.charAt(0).toUpperCase() + currElem.slice(1).toLowerCase();
    }
  });
  return str.join("");
};

// Example Usage:
console.log(toCamelCase("hello world thApa")); // Output: helloWorldThapa

// Solution: for snake-case
const toSnakeCase = (str) => {
  str = str.split(/(?=[A-Z])/);
  str = str.map((currElem, index) => {
    if (index === 0) {
      return currElem.toLowerCase();
    } else {
      return "-" + currElem.toLowerCase();
    }
  });
  return str.join("");
};

// Example Usage
console.log(toSnakeCase("helloWorld")); // Output: hello_world
