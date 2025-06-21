var middleNode = function(head) {
    let slow=head;
    let fast=head;
    if(slow.next==null){
        return slow;
    }
    while(fast!=null && fast.next!=null){
        slow=slow.next; //x
        fast=fast.next.next; //2x
    }
    return slow;
};