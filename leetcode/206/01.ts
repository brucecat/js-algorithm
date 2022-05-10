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

function reverseList(head: ListNode | null): ListNode | null {
    if (head == null) return null

    let stack = []
    // let dummy = new ListNode(-1)
    // dummy.next = head

    let p = head

    // 将链表中前n-1个放入栈中
    while (p !== null && p.next !== null) {
        // console.log(p);

        stack.push(p)
        p = p.next
    }

    // console.log(stack);


    let newHead = p;
    // console.log(p);

    // 出栈
    while (stack.length > 0) {
        let tmpNode = stack.pop()
        tmpNode.next = null
        p.next = tmpNode
        p = p.next
    }
    // console.log(newHead);

    return newHead
};




function reverse(head: ListNode | null): ListNode | null {
    if (head == null || head.next == null) return head

    let last = reverse(head.next)

    head.next.next = head
    head.next = null

    return last

};



