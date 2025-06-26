/**
 * Finds the first non-repeating number in an array.
 * If all numbers repeat, returns -1.
 *
 * @param {number[]} nums - The array of integers
 * @returns {number} - The first non-repeating number or -1
 */
function firstNonRepeating(nums) {
  const countMap = {};

  // First pass: count frequencies
  for (let num of nums) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  // Second pass: find first unique
  for (let num of nums) {
    if (countMap[num] === 1) {
      return num;
    }
  }

  return -1;
}

// Example usage: reading input from terminal
if (require.main === module) {
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let inputLines = [];

  rl.on('line', (line) => {
    inputLines.push(line.trim());
    if (inputLines.length === 2) {
      const nums = inputLines[1].split(' ').map(Number);
      const result = firstNonRepeating(nums);
      console.log(result);
      rl.close();
    }
  });
}
