/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummyNode = new ListNode(0);
  let carry = 0;
  let curr = dummyNode;
  while (l1 || l2 || carry > 0) {
    let val1 = 0;
    let val2 = 0;
    if (l1) {
      val1 = l1.val;
    }
    if (l2) {
      val2 = l2.val;
    }
    let currSum = val1 + val2 + carry;
    carry = Math.floor(currSum / 10);
    curr.next = new ListNode(currSum % 10);
    curr = curr.next;
    if (l1 != null) {
      l1 = l1.next;
    }
    if (l2 != null) {
      l2 = l2.next;
    }
  }
  return dummyNode.next;
};
