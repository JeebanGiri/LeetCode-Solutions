const expect = (value) => {
  return {
    toBe: (expected) => {
      if (value === expected) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (expected) => {
      if (value !== expected) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

try {
  expect(2).toBe(2);
  expect(5).toBe(4);
  expect(4).notToBe(4);
  expect(5).notToBe(5);
} catch (err) {
  console.log(err);
}
