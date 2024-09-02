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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const num1List = [];
    const num2List = [];

    let cur = l1;
    while (cur !== null) {
        num1List.unshift(cur.val);
        cur = cur.next;
    }

    cur = l2;
    while (cur !== null) {
        num2List.unshift(cur.val);
        cur = cur.next;
    }

    const num1 = Number(num1List.join(''));
    const num2 = Number(num2List.join(''));
    const sum = num1 + num2;

    console.log('num1: ', num1);
    console.log('num2: ', num2);

    const sumNumList = Array.from(String(sum));

    console.log('sumNumList: ', sumNumList);

    let head = new ListNode(Number(sumNumList[sumNumList.length - 1]));
    cur = head

    for (let i = sumNumList.length - 2; i >= 0; i--) {
      cur.next = new ListNode(Number(sumNumList[i]));
      cur = cur.next
    }

    return head;
}


// var addTwoNumbers = function(l1, l2) {
//   let head = null, tail = null;
//   let carry = 0;
//   while (l1 || l2) {
//       const n1 = l1 ? l1.val : 0;
//       const n2 = l2 ? l2.val : 0;
//       const sum = n1 + n2 + carry;
//       if (!head) {
//           head = tail = new ListNode(sum % 10);
//       } else {
//           tail.next = new ListNode(sum % 10);
//           tail = tail.next;
//       }
//       carry = Math.floor(sum / 10);
//       if (l1) {
//           l1 = l1.next;
//       }
//       if (l2) {
//           l2 = l2.next;
//       }
//   }
//   if (carry > 0) {
//       tail.next = new ListNode(carry);
//   }
//   return head;
// };