/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const number = [];
let nums = [-1, 0, 1, 2, -1, -4];
var threeSum = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (i != j && i != k && j != k && nums[i] + nums[j] + nums[k] == 0) {
          number.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
    return number;
  }
};

console.log(threeSum(nums));
