// var expect = function (val) {
//   return {
//     toBe: (expected) => {
//       return val === expected ? true : "Not Equal";
//     },

//     notToBe: (expected) => {
//       return val !== expected ? true : "Equal";
//     },
//   };
// };
// try {
//   expect(5).toBe(5); // Passes
//   expect(5).notToBe(10); // Passes
//   expect(5).toBe(10); // Throws "Not Equal"
// } catch (error) {
//   console.error(error.message); // Logs "Not Equal"
// }

function expect(val) {
  return {
    toBe: (expected) => {
      if (val === expected) {
        return true; // Passes
      } else {
        throw new Error("Not Equal"); // Fails
      }
    },
    notToBe: (expected) => {
      if (val !== expected) {
        return true; // Passes
      } else {
        throw new Error("Equal"); // Fails
      }
    },
  };
}

// Example Usage:
try {
  expect(5).toBe(5); // Passes
  expect(5).notToBe(10); // Passes
  expect(5).toBe(10); // Throws "Not Equal"
} catch (error) {
  console.error(error.message); // Logs "Not Equal"
}
