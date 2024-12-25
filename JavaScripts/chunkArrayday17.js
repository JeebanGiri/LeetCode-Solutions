var chunk = function (arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunk;
};
const arr = [1, 9, 6, 3, 2];
const size = 3;
console.log(chunk(arr, size));
