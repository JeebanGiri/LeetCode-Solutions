const longestCommonPrefix = (strs) => {
  let prefixs = "";
  for (let prefix in strs) {
    for (let i = 0; i < prefix.length; i++) {
      console.log(prefix[i]);
    }
  }
};
strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
