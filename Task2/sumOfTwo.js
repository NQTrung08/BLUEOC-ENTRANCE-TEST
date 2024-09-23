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
  console.log(array);
  return array[0] + array[1];
};


const testSumOfTopTwoIntegers = () => {
  console.assert(sumOfTopTwoIntegers([1, 4, 2, 3, 5]) === 9, 'Test case 1 thất bại');

  console.assert(sumOfTopTwoIntegers([10, 20, 30, 40, 50]) === 90, 'Test case 2 thất bại');

  console.assert(sumOfTopTwoIntegers([1, 2, 3, 4, 5]) === 9, 'Test case 3 thất bại');

  console.assert(sumOfTopTwoIntegers([10, 9, 8, 7, 6]) === 19, 'Test case 4 thất bại');

  console.assert(sumOfTopTwoIntegers([1, 1, 2, 2, 3, 3, 4]) === 7, 'Test case 5 thất bại');

}

testSumOfTopTwoIntegers();