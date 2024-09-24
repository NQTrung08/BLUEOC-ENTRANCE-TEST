// Task 1: String Length Frequency
// Objective: Write a function that identifies the most frequent string lengths in an array of strings.
// Requirements:
// Provide multiple test cases.
// Use any language you prefer; JavaScript or Python is recommended.
// [Optional] Include a unit test function.
// Example:
// Input: ['a', 'ab', 'abc', 'cd', 'def', 'gh']
// Explanation: The string lengths are [1, 2, 3, 2, 3, 2]. The most frequent length is 2, corresponding to ['ab', 'cd', 'gh'].
// Output: ['ab', 'cd', 'gh']

const mostFrequentLengths = (array) => {
  const lengths = array.map(i => i.length);
  const frequency = {};

  lengths.forEach(length => {
    frequency[length] = (frequency[length] || 0) + 1;
  });
  // console.log(frequency);

  let maxCount = 0;
  let mostFrequentLengths = 0;

  for (const length in frequency) {
    if (frequency[length] > maxCount) {
      maxCount = frequency[length];
      mostFrequentLengths = length;
    }
  }

  // console.log(mostFrequentLengths)

  const mostFrequentStrings = array.filter(str => str.length === parseInt(mostFrequentLengths));
  return mostFrequentStrings;

}


function testMostFrequentLengths() {
  // Test case 1
  if (JSON.stringify(mostFrequentLengths(['a', 'ab', 'abc', 'cd', 'def', 'gh'])) === JSON.stringify(['ab', 'cd', 'gh'])) {
    console.log('Test case 1 passed');
  } else {
    console.log('Test case 1 failed');
  }

  // Test case 2
  if (JSON.stringify(mostFrequentLengths(['one', 'two', 'six'])) === JSON.stringify(['one', 'two', 'six'])) {
    console.log('Test case 2 passed');
  } else {
    console.log('Test case 2 failed');
  }

  // Test case 3
  if (JSON.stringify(mostFrequentLengths(['hello', 'hi', 'yo', 'sup', 'ok'])) === JSON.stringify(['hi', 'yo', 'ok'])) {
    console.log('Test case 3 passed');
  } else {
    console.log('Test case 3 failed');
  }

  // Test case 4
  if (JSON.stringify(mostFrequentLengths(['single'])) === JSON.stringify(['single'])) {
    console.log('Test case 4 passed');
  } else {
    console.log('Test case 4 failed');
  }

  // Test case 5 (chấp nhận nhiều kết quả đúng)
  const result = JSON.stringify(mostFrequentLengths(['a', 'bb', 'ccc', 'ddd', 'e', 'ff']));
  const expected1 = JSON.stringify(['a', 'e']);
  const expected2 = JSON.stringify(['bb', 'ff']);
  const expected3 = JSON.stringify(['ccc', 'ddd']);
  if (result === expected1 || result === expected2 || result === expected3) {
    console.log('Test case 5 passed');
  } else {
    console.log('Test case 5 failed');
  }

}

testMostFrequentLengths();
