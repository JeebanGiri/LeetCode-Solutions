var cancellable = function (fn, args, t) {
  // Call the function Immediately
  fn(...args);

  // Start repeating interval
  const intervalId = setInterval(() => {
    fn(...args);
  }, t);

  //Return a cancel Function
  return function cancelFn() {
    clearInterval(intervalId);
  };
};
const fn1 = (x) => x * 5;
const args1 = [2];
const t1 = 20;
const cancelTimeMs1 = 50;

const cancelFn1 = cancellable(fn1, args1, t1);
console.log(setTimeout(cancelFn1, cancelTimeMs1));
