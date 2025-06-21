var isPalindrome = function (head) {
    if (head.next == null) {
        return true;
    }
    // let curr=head;
    // let ptr1=head;
    // let ptr2=head;

    //middle of LL
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    //reverse from middle(slow)
    let prev = null;
    let curr = slow;
    let temp = curr.next;
    while (curr != null) {
        curr.next = prev;
        prev = curr;
        curr = temp;
        if (temp != null) {

            temp = temp.next;
        }
    }

    //checking palindrome
    //now curr have the end of LL node of reversed LL
    while(prev!=null){
        if(head.val!==prev.val){
            return false;
        }
        head=head.next;
        prev=prev.next;
    }
    return true;

    // let arr=[];
    // let i=0;
    // while (curr != null) {

    // }
    //got the array of LL values.
    // i=0;
    // let j=arr.length-1;
    // while(i<j){
    //     if(arr[i]!=arr[j]){
    //         return false;
    //     }
    //     i++;
    //     j--;
    // }
    // return true;
};