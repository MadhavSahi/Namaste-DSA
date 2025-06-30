var nextGreaterElement = function (nums1, nums2) {
    const stack = [];
    const map = new Map();

    for (let i = nums2.length - 1; i >= 0; i--) {
        const num = nums2[i];

        // Pop all elements smaller than or equal to the current number
        while (stack.length > 0 && stack[stack.length - 1] <= num) {
            stack.pop();
        }

        // If stack is empty, there is no greater element
        map.set(num, stack.length === 0 ? -1 : stack[stack.length - 1]);

        // Push current number to stack
        stack.push(num);
    }

    // Build result for nums1 and returns new array.
    return nums1.map(num => map.get(num));
};
