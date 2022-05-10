function middleNode(head: ListNode | null): ListNode | null {
    let slow = head, fast = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next?.next
        slow = slow.next
    }
    return slow
};