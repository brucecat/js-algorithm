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

// 翻转链表中的前n个
function listReverseN(head, n) {
    if (n <= 1) {
        return head
    }

    let successor = null // 后驱节点

    function reverseN(head, n) {


        if (n == 1) {
            // 记录第n+1个节点
            successor = head.next
            return head
        }


        // 以head.next为起点，需要反转前n-1个节点
        let last = reverseN(head.next, n - 1)


        head.next.next = head
        head.next = successor
        return last
    }

    return reverseN(head, n)
}


function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (head == null || head.next == null || right == left) {
        return head
    }

    if (head.next.next == null) {
        let newHead = head.next
        newHead.next = head
        head.next = null
        return newHead
    }


    if (left == 1) {
        return listReverseN(head, right)
    }

    // 找到第left - 1 个节点
    let p1 = head

    for (let i = 1; i < left - 1; i++) {
        p1 = p1.next
    }

    let p2 = listReverseN(p1.next, right - left + 1)

    if (p1 !== p2) p1.next = p2

    return head

};



function reverseBetween01(head: ListNode | null, left: number, right: number): ListNode | null {
    if (head == null || head.next == null || right == left) {
        return head
    }

    if (left == 1) {
        return listReverseN(head, right)
    }

    // 前进到翻转的起点 base case
    head.next = reverseBetween(head.next, left - 1, right - 1)

    return head
};