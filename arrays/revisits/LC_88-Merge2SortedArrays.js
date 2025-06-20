//quite tricky to handle edge cases.
// learnt.
//not easy as it seems.
var merge = function (nums1, m, nums2, n) {
    if (n == 0) {
        return nums1;
    }
    if (m == 0) {
        for (let i = 0; i < n; i++) {
            nums1[i] = nums2[i];
        }
        return;
    }

    // let newArray = [];
    let i = 0;
    let j = 0;
    let ptr1 = m - 1;
    let ptr2 = n - 1;
    let ptr3 = m + n - 1;
    for (let x = ptr3; x >= 0; x--) {
        //handling edge case
        if (ptr2 < 0) {
            break;
        }
        //handling edge case - tricky.
        if (ptr1 < 0) {
            for (let p = 0; p < ptr2+1; p++) {
                nums1[p] = nums2[p];
            }
            break;
        }
        if (nums1[ptr1] < nums2[ptr2]) {
            nums1[x] = nums2[ptr2];
            ptr2--;
        }
        else {
            nums1[x] = nums1[ptr1];
            ptr1--;
        }
    }
    return nums1;
}