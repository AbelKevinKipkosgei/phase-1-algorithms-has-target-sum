// Write your algorithm here
function hasTargetSum(arr, target) {
  let seen_numbers = new Set();

  for (let num of arr) {
    let complement = target - num;
    if (seen_numbers.has(complement)) {
      return true;
    }
    seen_numbers.add(num);
  }

  return false;
}

// Test cases
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // true
console.log(hasTargetSum([1, 2, 5], 4)); // false

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  Function hasTargetSum(arr, target):
    1. Create an empty set called `seen_numbers`.
    2. Iterate through each number `num` in `arr`:
        - Calculate `complement` as `target - num`.
        - If `complement` is in `seen_numbers`, return true.
        - Otherwise, add `num` to `seen_numbers`.
    3. If the loop completes without finding any pairs, return false.

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
