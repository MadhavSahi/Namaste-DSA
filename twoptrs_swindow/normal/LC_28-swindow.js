/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function(haystack, needle) {
var strStr = function (h, n) {
  let hs = h.length;
  let ns = n.length; //sliding window
  for (let i = 0; i < hs; i++) {
    let j = 0;
    for (j = 0; j < ns; j++) {
      if (n[j] === h[i + j]) {
        continue;
      } else {
        break;
      }
    }
    if (j == ns) {
      return i;
    }
  }
  return -1;
};
