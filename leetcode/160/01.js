/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function getIntersectionNode(headA, headB) {
    var p1 = headA, p2 = headB;
    if (!p1 || !p2)
        return null;
    while (p1 !== p2) {
        if (p1.next == null) {
            p1 = headB;
        }
        else {
            p1 = p1.next;
        }
        if (p2.next == null) {
            p2 = headA;
        }
        else {
            p2 = p2.next;
        }
    }
    return p1;
}
;
function getIntersectionNode01(headA, headB) {
    var p1 = headA, p2 = headB;
    while (p1 != null) {
        p1 = p1.next;
        p2 = p2 === null || p2 === void 0 ? void 0 : p2.next;
        if ()
            ;
    }
}
;
var getIntersectionNode02 = function (headA, headB) {
    var A = headA, B = headB;
    if (!A || !B)
        return null;
    while (A !== B) {
        A = !A ? headB : A.next;
        B = !B ? headA : B.next;
    }
    return A;
};
function getIntersectionNode03(headA, headB) {
    var A = headA, B = headB;
    if (!A || !B)
        return null;
    while (A !== null && A.next !== null) {
        A = A.next;
    }
    A.next = headB;
    return detectCycle(A);
}
;
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
