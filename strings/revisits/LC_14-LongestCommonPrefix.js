/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let size = strs.length;
    if (size === 1) {
        return strs[0];
    }
    // let minLength = Infinity;
    let output = ""
    let minLength = Math.min(...strs.map(str => str.length));
    for (let i = 0; i < minLength; i++) {
        let currentChar = strs[0][i];
        if (strs.every(str => str[i] === currentChar)) {

            output += strs[0][i];
        }else{
            break;
        }
    }
    return output;

};