var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let j = 0; // Pointer to place the next unique element
  for (let i = 1; i < nums.length; i++) {
    // If we find a unique element (different from nums[j]), we place it at the next unique position
    if (nums[i] !== nums[j]) {
      j++; // Move the pointer for the next unique position
      nums[j] = nums[i]; // Place the unique element
    }
  }
  return j + 1; // j is the index of the last unique element, so return j + 1 as the count we add 1 becz the initial value of j is 0;
};
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k = removeDuplicates(nums);
console.log(k);
