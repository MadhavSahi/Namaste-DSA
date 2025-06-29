/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    if(tokens.length==1){
        return Number(tokens[0]);
    }
    let stack = [];
    for (let i of tokens) {
        let result = 0;
        if (i == '+' || i == '-' || i == '/' || i == '*') {
            let b = Number(stack.pop());
            let a = Number(stack.pop());
            if (i == '+') {
                result = a + b;
            }
            if (i == '-') {
                result = a - b;
            }
            if (i == '/') {
                result = Math.trunc(a / b);
            }
            if (i == '*') {
                result = a * b;
            }
            stack.push(result);
        }
        else {
            stack.push(i);
        }
    }
    return stack.pop();
};