var getIntersectionNode = function (headA, headB) {
    let sizeA = 0;
    let sizeB = 0;
    let currA = headA;
    let currB = headB;
    while (currA) {
        sizeA++;
        currA = currA.next;
    }
    while (currB) {
        sizeB++;
        currB = currB.next;
    }
    if (sizeA > sizeB) {
        let diff = sizeA - sizeB;
        let startA = headA;
        for (let i = 0; i < diff; i++) {
            startA = startA.next;
        }
        while (startA != headB) {
            startA = startA.next;
            headB = headB.next;
        }
        return startA;
    }
    else {
        let diff = sizeB - sizeA;
        let startB = headB;
        for (let i = 0; i < diff; i++) {
            startB = startB.next;
        }
        while (startB != headA) {
            startB = startB.next;
            headA = headA.next;
        }

        return startB;
    }
};