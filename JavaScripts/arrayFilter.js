const filter = (arr, fn) => {
  // --------USING FOR LOOP-----------
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;

  //-------- USING FOR EACH LOOP------------
  let result1 = [];
  arr.foreach((item, index) => {
    if (fn(item, index, arr)) {
      result1.push(item);
    }
  });
  return result1;

  // --------USING REDUCE METHOD-------------
  let result2 = [];
  return arr.reduce((result, currentValue, index, array) => {
    if (fn(currentValue, index, array)) {
      result2.push(currentValue);
    }
    return result2;
  }, []);
};

const arr = [-2, -1, 20, 0, 1, 2];
const greaterThan10 = (n) => n > 10;
const firstIndex = (i) => i === 0;
const plusOne = (n) => n + 1;

console.log(filter(arr, greaterThan10));
console.log(filter(arr, firstIndex));
console.log(filter(arr, plusOne));
