var compose = function (functions) {
  let fun = functions;
  return function (x) {};
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
fn(4);
