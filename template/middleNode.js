var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function middleNode(head) {
    var slow = head;
    var fast = head;
    // 快指针走到末尾时候停止
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
function hasCycle(head) {
    var slow = head;
    var fast = head;
    // 快指针走到末尾时候停止
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            return true;
        }
    }
    // 不包含环
    return false;
}
function detectCycle(head) {
    var fast, slow;
    fast = slow = head;
    while (fast != null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) {
            break;
        }
    }
    if (fast == null || fast.next == null) {
        return null;
    }
    // 重新指向头结点
    slow = head;
    // 快慢指针同步前进，相交点就是环的起点
    while (slow != fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}
;
