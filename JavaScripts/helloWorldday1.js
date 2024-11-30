var createHelloWorld = function () {
    return function demo(...args) {
      return "Hello World";
    };
  };
  
  const f = createHelloWorld();
  const args = [{}, null, 42];
  console.log(f(args));
  