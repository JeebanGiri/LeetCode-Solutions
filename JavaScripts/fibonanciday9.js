const fibonanci = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonanci(n - 1) + fibonanci(n - 2);
};

console.log(fibonanci(3));
