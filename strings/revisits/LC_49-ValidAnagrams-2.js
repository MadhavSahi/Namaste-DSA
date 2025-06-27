/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let hashmap = new Map();
  for (let word of strs) {
    let str = word;
    let freqArr = new Array(26).fill(0);
    for (let char of str) {
      let index = char.charCodeAt() - "a".charCodeAt();
      freqArr[index]++;
    }
    let hashString = "";
    for (let i = 0; i < 26; i++) {
      hashString += String.fromCharCode(i) + freqArr[i];
    }
    if (hashmap.has(hashString)) {
      hashmap.get(hashString).push(word);
    } else {
      hashmap.set(hashString, [word]);
    }
  }
  return [...hashmap.values()];
};
