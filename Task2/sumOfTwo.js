// Task 2: Sum of Top Two Integers
// Objective: Write a function that finds the sum of the two largest integers in an array.
// Requirements:
// Provide multiple test cases.
// Use any language you prefer; JavaScript or Python is recommended.
// [Optional] Include a unit test function.
// Example:
// Input: [1, 4, 2, 3, 5]
// Explanation: The two largest integers are 5 and 4. Their sum is 9.
// Output: 9

const sumOfTopTwoIntegers = (array) => {

  array.sort((a, b) => b - a);
  // console.log(array);
  return array[0] + array[1];
};


const testSumOfTopTwoIntegers = () => {
  // Test case 1
  if (sumOfTopTwoIntegers([1, 4, 2, 3, 5]) === 9) {
    console.log('Test case 1 passed');
  } else {
    console.log('Test case 1 failed');
  }

  // Test case 2
  if (sumOfTopTwoIntegers([10, 20, 30, 40, 50]) === 90) {
    console.log('Test case 2 passed');
  } else {
    console.log('Test case 2 failed');
  }

  // Test case 3
  if (sumOfTopTwoIntegers([1, 2, 3, 4, 5]) === 9) {
    console.log('Test case 3 passed');
  } else {
    console.log('Test case 3 failed');
  }

  // Test case 4
  if (sumOfTopTwoIntegers([10, 9, 8, 7, 6]) === 19) {
    console.log('Test case 4 passed');
  } else {
    console.log('Test case 4 failed');
  }

  // Test case 5
  if (sumOfTopTwoIntegers([1, 1, 2, 2, 3, 3, 4]) === 7) {
    console.log('Test case 5 passed');
  } else {
    console.log('Test case 5 failed');
  }

}

testSumOfTopTwoIntegers();