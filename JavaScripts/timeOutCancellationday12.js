var cancellable = function (fn, args, t) {
  let timeOutId;
  // Schedule the execution of fn
  setTimeout(() => {
    timeOutId = fn(...args);
  }, t);
  // Return the cancel function
  return function cancelFn() {
    clearTimeout(timeOutId); // cancel the timeOut
  };
};

const fn1 = (x) => x * 5;
const args1 = [2];
const t1 = 20;
const cancelTimeMs1 = 50;

const cancelFn1 = cancellable(fn1, args1, t1);
console.log(setTimeout(cancelFn1, cancelTimeMs1));
