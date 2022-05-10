

function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;

    // 快指针走到末尾时候停止
    while (fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next

        if (slow == fast) {
            return true
        }
    }
    // 不包含环
    return false
}