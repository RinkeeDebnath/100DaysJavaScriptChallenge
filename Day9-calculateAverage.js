// Challenge: Calculate the Average

// Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.

// Your function should:

// Accept an array of numbers as input.
// Calculate the sum of all the numbers in the array.
// Divide the sum by the total numbers of elements in the array to find the average.
// Return the calculated avarage.

function calculateAverage(array) {
  const sum = array.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
  }, 0);

  const avg = sum / array.length;
  return avg;
}

// Example usage
console.log(calculateAverage([5, 10, 2, 8]));
