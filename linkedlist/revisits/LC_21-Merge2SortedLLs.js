/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  let curr = null;
  if (list1.val < list2.val) {
    curr = list1;
    list1 = list1.next;
  } else {
    curr = list2;
    list2 = list2.next;
  }
  let result = curr;
  //curr 1 step piche rahega from list1 or list2.
  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }
  if (!list1) {
    curr.next = list2;
  }
  if (!list2) {
    curr.next = list1;
  }

  return result;
};
