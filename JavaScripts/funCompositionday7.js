var compose = function (functions) {
  return function (x) {
    return functions.reduceRight((accum, fn) => fn(accum), x);
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4));
