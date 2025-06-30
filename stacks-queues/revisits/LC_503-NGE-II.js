//APPROACH 1
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let array = [...nums, ...nums];
  let size = array.length;
  let stack = [];
  let answerArray = new Array(nums.length).fill(-1);

  for (let i = size - 1; i >= 0; i--) {
    let curr = array[i];
    while (stack.length) {
      let stackTop = stack[stack.length - 1];
      if (stackTop > curr) {
        answerArray[i] = stackTop;
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(curr);
  }
  return answerArray.slice(0, nums.length);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */

//APPROACH 2
var nextGreaterElements = function (nums) {
    // let array = [...nums, ...nums];
    // let size = array.length;
    let stack = [];
    let answerArray = new Array(nums.length).fill(-1);
    let size=nums.length;
    for (let i = 2*(size)-1; i >= 0; i--) {
        let curr = nums[i%size];
        while (stack.length) {
            let stackTop = stack[stack.length - 1]
            if (stackTop > curr) {
                answerArray[i%size] = stackTop;
                break;
            }
            else {
                stack.pop();

            }
        }
        stack.push(curr);
    }
    return answerArray;
};