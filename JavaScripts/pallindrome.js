/**
 * @param {number} x
 * @return {boolean}
 */
let findPallindrome = true;
var isPalindrome = function (x) {
  const findPallindrome = Number(String(x).split("").reverse().join(""));
  if (findPallindrome == x) return true;
  else return false;
};
const num = isPalindrome(121);
