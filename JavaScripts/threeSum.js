/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let nums = [-1, 0, 1, 2, -1, -4];
var threeSum = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (i != j && i != k && j != k) {
          if (nums[i] + nums[j] + nums[k] == 0) {
            console.log(i,j,k);
            return [i, j, k];
          }
        }
      }
    }
  }
};

// let out = threeSum(nums);h

