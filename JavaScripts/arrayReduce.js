const reduce = (nums, fn, init) => {
  let accumulator = init;
  if (nums.length === 0) return init;
  for (let i = 0; i < nums.length; i++) {
    accumulator = fn(accumulator, nums[i]);
  }
  return accumulator;
};
const sum = (accum, curr) => accum + curr;

const arr = [1, 2, 3, 4];
console.log(reduce(arr, sum, 100));
