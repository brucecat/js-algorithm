function findFromEnd(head: ListNode, k: number) {
    let p1 = head;
    let p2 = head;

    // p1先走k步
    for (let i = 0; i < k; i++) {
        p1 = p1?.next;
    }

    // p1 p2 同时走n-k步
    while (p1 != null) {
        p1 = p1?.next
        p2 = p2?.next
    }

    // p2指向第n-k个节点
    return p2
}