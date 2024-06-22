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
        if (this.queue.length) {
            return this.queue.shift().data;
        }
    };
    // 判空
    PriorityQueue.prototype.isEmpty = function () {
        return this.queue.length === 0;
    };
    return PriorityQueue;
}());
// https://github.com/datastructures-js/priority-queue
