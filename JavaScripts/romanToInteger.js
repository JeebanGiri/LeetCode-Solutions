const getRomanToInteger = (roman) => {
  const romanNumber = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let x = 0; x < roman.length; x++) {
    const currentChar = roman[x];
    const currentValue = romanNumber[currentChar];
    const nextChar = roman[x + 1];
    const nextValue = romanNumber[nextChar];
    console.log(currentChar);
    console.log(currentValue);
    console.log(nextChar);
    // console.log(nextValue);
  }
};

getRomanToInteger("IV");
