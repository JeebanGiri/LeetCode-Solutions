const isEmpty = (obj) => {
  if (Object.keys(obj).length === 0) return true;
  return false;
};
const jsonStr = { name: "Jeeban", address: "Itahari" };
const jsArr = [null, false, 0];
const emOb = {};
const emAr = [];
console.log(isEmpty(emAr));
