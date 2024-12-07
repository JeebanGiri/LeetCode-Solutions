const map = (arr, fn) => {
  const array = arr.length;
  let result = [];
  for (let i = 0; i < array; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
};
const plusOne = (n) => n + 1;
const addIndex = (n, i) => n + i;
const constant = () => 42;

let arrs = [1, 2, 3];
console.log(map(arrs, plusOne));
console.log(map(arrs, addIndex));
console.log(map(arrs, constant));
