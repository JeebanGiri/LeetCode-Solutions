const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "No words to find Prefix";
  let prefix = strs[0];
  // Itterate each words and it will first take a flow which is index 1
  for (let i = 1; i < strs.length; i++) {
    // true, because "flower" is longer than "flow" and doesn't match
    while (strs[i].indexOf(prefix) !== 0) {
      // It will take a words from 0 index and remove the last character
      prefix = prefix.substring(0, prefix.length - 1);
      // If no prefix is made it retern this message
      if (prefix === "") return "No prefix found";
    }
  }
  return prefix;
};
strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
