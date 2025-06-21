var reverseList = function (head) {
    if (head == null) {
        return null;
    }
    if (head.next == null) {
        return head;
    }
    let prev = null;
    let curr = head;
    // let temp=null;
    let temp = curr.next;
    while (curr != null) {
        curr.next = prev;
        prev = curr;
        curr = temp;
        if (temp != null) {

            temp = temp.next;
        }
        // temp=curr.next;
        // curr.next=prev;
        // prev=curr;
        // curr=temp;
    }
    return prev;
};