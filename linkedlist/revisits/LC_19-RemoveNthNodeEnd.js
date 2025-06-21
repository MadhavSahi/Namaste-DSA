function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
//2 pass solution.
var removeNthFromEnd = function (head, n) {
  if (head.next == null) {
    return null;
  }
  let curr = head;
  let length = 0;
  while (curr) {
    length++;
    curr = curr.next;
  }
  //got the size of LL in length.

  //concept of sentinel is important in deleting elements in LL questions. It helps in covering the corner cases easily.
  let sentinel = new ListNode();
  sentinel.next = head;
  let prev = sentinel;
  let start = length - n;
  for (let i = 0; i < start; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;
  return sentinel.next;
};

//1 pass solution.
// here we are just moving 1 ptr by n distance from sentinel node. Hence when fast pointer reaches end node, the distance between slow and fast will be n. And slow will be 1 node behind the nth node from end.
var removeNthFromEnd2 = function(head, n) {
    if(!head.next){
        return null;
    }
    let sentinel=new ListNode();
    sentinel.next=head;
    let slow=sentinel;
    let fast=sentinel;
    while(n>0){
        fast=fast.next;
        n--;
    }
    while(fast.next!=null){
        fast=fast.next;
        slow=slow.next;
    }
    slow.next=slow.next.next;
    return sentinel.next;
};