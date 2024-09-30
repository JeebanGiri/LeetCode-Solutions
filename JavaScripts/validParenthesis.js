const isValid = (char) => {
  let stack = [];
  for (let i = 0; i < char.length; i++) {
    console.log(char[i]);
  }
  // for (let expression of char) {
  //   console.log(expression);
  // }
  // return char;
};
let s = "() {}";
console.log(isValid(s));
