var removeDuplicates = function (nums) {
  const remove = [...new Set(nums)];
  return remove.length;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k = removeDuplicates(nums);
console.log(k);
