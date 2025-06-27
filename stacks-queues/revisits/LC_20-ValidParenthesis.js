/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let size = s.length;
    if (size % 2 === 1) { //odd number of parenthesis.
        return false;
    }
   
    let stack = [];
    for (bracket of s) {
        if (bracket == '(' || bracket == '[' || bracket == '{') {
            stack.push(bracket);
        }
        else if (bracket === ')' && stack.pop() !== '(') {
            return false;
        }
        else if (bracket === '}' && stack.pop() !== '{') {
            return false;
        }
        else if (bracket === ']' && stack.pop() !== '[') {
            return false;
        }
        // else{
        //     stack.pop();
        // }
    }
    if (stack.length !== 0) {
        return false;
    }
    else {
        return true;
    }

};