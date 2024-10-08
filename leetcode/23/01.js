var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
var PQNode = /** @class */ (function () {
    function PQNode(data, priority) {
        this.data = data;
        this.priority = priority;
    }
    return PQNode;
}());
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.queue = [];
    }
    /** 入队 */
    PriorityQueue.prototype.enqueue = function (data, priority) {
        var node = new PQNode(data, priority);
        if (!this.queue.length) {
            this.queue.push(node);
        }
        else {
            var isEnqueue = false; // 是否已入队
            for (var i = 0; i < this.queue.length; i++) {
                if (this.queue[i].priority < node.priority) {
                    this.queue.splice(i, 0, node);
                    isEnqueue = true;
                    break;
                }
            }
            // 循环后未入队，即优先级最小，插入队尾
            if (!isEnqueue) {
                this.queue.push(node);
            }
        }
    };
    /** 出队 */
    PriorityQueue.prototype.dequeue = function () {
        if (!this.isEmpty()) {
            return this.queue.shift().data;
        }
        return null;
    };
    // 判空
    PriorityQueue.prototype.isEmpty = function () {
        return this.queue.length === 0;
    };
    // 打印
    PriorityQueue.prototype.print = function () {
        console.log(this.queue);
    };
    return PriorityQueue;
}());
function mergeKLists(lists) {
    if (lists.length == 0)
        return null;
    // 虚拟头结点
    var dummy = new ListNode(-1);
    var p = dummy;
    // 优先级队列 最小堆
    var minpq = new PriorityQueue();
    // 将k个链表的头结点加入最小堆
    lists.forEach(function (head) {
        if (head != null) {
            minpq.enqueue(head, -head.val);
        }
    });
    // minpq.print()
    while (!minpq.isEmpty()) {
        // 获取最小节点，接到结果链表中
        var node = minpq.dequeue();
        // console.log("本次最小节点：", node);
        p.next = node;
        if (node.next != null) {
            minpq.enqueue(node.next, -node.next.val);
        }
        // console.log(minpq);
        // p指针不断前进
        p = p.next;
    }
    return dummy.next;
}
;
// [[1,4,5],[1,3,4],[2,6]]
// [
//     PQNode { data: [1,4,5], priority: -1 },
//     PQNode { data: [1,3,4], priority: -1 },
//     PQNode { data: [2,6], priority: -2 }
//   ]
//   本次最小节点： [1,4,5]
//   PriorityQueue {
//     queue: [
//       PQNode { data: [1,3,4], priority: -1 },
//       PQNode { data: [2,6], priority: -2 },
//       PQNode { data: [4,5], priority: -4 }
//     ]
//   }
//   本次最小节点： [1,3,4]
//   PriorityQueue {
//     queue: [
//       PQNode { data: [2,6], priority: -2 },
//       PQNode { data: [3,4], priority: -3 },
//       PQNode { data: [4,5], priority: -4 }
//     ]
//   }
//   本次最小节点： [2,6]
//   PriorityQueue {
//     queue: [
//       PQNode { data: [3,4], priority: -3 },
//       PQNode { data: [4,5], priority: -4 },
//       PQNode { data: [6], priority: -6 }
//     ]
//   }
//   本次最小节点： [3,4]
//   PriorityQueue {
//     queue: [
//       PQNode { data: [4,5], priority: -4 },
//       PQNode { data: [4], priority: -4 },
//       PQNode { data: [6], priority: -6 }
//     ]
//   }
//   本次最小节点： [4,5]
//   PriorityQueue {
//     queue: [
//       PQNode { data: [4], priority: -4 },
//       PQNode { data: [5], priority: -5 },
//       PQNode { data: [6], priority: -6 }
//     ]
//   }
//   本次最小节点： [4]
//   PriorityQueue {
//     queue: [
//       PQNode { data: [5], priority: -5 },
//       PQNode { data: [6], priority: -6 }
//     ]
//   }
//   本次最小节点： [5]
//   PriorityQueue { queue: [ PQNode { data: [6], priority: -6 } ] }
//   本次最小节点： [6]
//   PriorityQueue { queue: [] }
function mergeKLists01(lists) {
    if (lists.length == 0)
        return null;
    var oneList = lists.shift();
    lists.forEach(function (item) {
        oneList = mergeTwoLists(oneList, item);
    });
    return oneList;
}
;
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
