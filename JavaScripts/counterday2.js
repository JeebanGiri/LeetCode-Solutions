const createCounter = (n) => {
  let counter = n;
  return function () {
    return counter++;
  };
};
let counters = createCounter(10);
console.log(counters());
console.log(counters());
