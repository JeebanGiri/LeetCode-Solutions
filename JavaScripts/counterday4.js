const createCounter = function (init) {
  let count = init;
  return {
    increment: () => {
      return ++count;
    },
    decrement: () => {
      return count - 1;
    },
    reset: () => {
      count = init;
      return count;
    },
    getCount: () => count,
  };
};
const counter = createCounter(0);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.reset());
console.log(counter.getCount());
