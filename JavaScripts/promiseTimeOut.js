var timeLimit = function (fn, t) {
  return async function (...args) {
    // create a timeout promise
    const timeOutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
    });

    // Execute the original function and race it against the timeout
    const fnPromise = fn(...args);

    return Promise.race([fnPromise, timeOutPromise]);
  };
};
// const fn = async (n) => {
//   await new Promise((res) =>
//     setTimeout(() => {
//       res();
//     }, n)
//   );
// };

fn = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};

const limitedFn = timeLimit(fn, 1000);
limitedFn(500).then((res) => console.log(res));
