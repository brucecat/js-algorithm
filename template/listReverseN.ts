// 翻转链表中的前n个
function listReverseN(head, n) {
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