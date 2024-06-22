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
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function mergeTwoLists(list1, list2) {
    var newHead = new ListNode(-1);
    var p = newHead;
    var p1 = list1, p2 = list2;
    while (p1 !== null && p2 !== null) {
        // 比较p1 p2两个指针
        // 将值较小的节点接到p指针
        if (p1.val > p2.val) {
            p.next = p2;
            p2 = p2.next;
        }
        else {
            p.next = p1;
            p1 = p1.next;
        }
        // p 指针不断前进
        p = p.next;
    }
    if (p1 != null) {
        p.next = p1;
    }
    if (p2 != null) {
        p.next = p2;
    }
    return newHead.next;
}
;
