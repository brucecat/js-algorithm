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
function removeNthFromEnd(head, n) {
    var dummy = new ListNode(-1);
    dummy.next = head;
    var cur = findFromEnd(dummy, n + 1);
    cur.next = cur.next.next;
    return dummy.next;
}
;
function findFromEnd(head, k) {
    var p1 = head;
    var p2 = head;
    // p1先走k步
    for (var i = 0; i < k; i++) {
        p1 = p1 === null || p1 === void 0 ? void 0 : p1.next;
    }
    // p1 p2 同时走n-k步
    while (p1 != null) {
        p1 = p1 === null || p1 === void 0 ? void 0 : p1.next;
        p2 = p2 === null || p2 === void 0 ? void 0 : p2.next;
    }
    // p2指向第n-k个节点
    return p2;
}
