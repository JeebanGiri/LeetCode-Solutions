/**
 *
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

nums = [1, 2, 3, 4, 5];
target = 7;
var twoSum = function (nums, target) {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(nums[i]);

      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
twoSum(nums, target);
