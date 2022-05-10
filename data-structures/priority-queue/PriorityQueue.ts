class PQNode {
    data: any
    priority: number

    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
    }
}


class PriorityQueue {
    queue: any[]
    constructor() {
        this.queue = [];
    }

    /** 入队 */
    enqueue(data, priority) {
        const node = new PQNode(data, priority);
        if (!this.queue.length) {
            this.queue.push(node);
        } else {
            let isEnqueue = false; // 是否已入队
            for (let i = 0; i < this.queue.length; i++) {
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
    }

    /** 出队 */
    dequeue() {
        if (this.queue.length) {
            return this.queue.shift().data;
        }
    }

    // 判空
    isEmpty() {
        return this.queue.length === 0
    }
}


// https://github.com/datastructures-js/priority-queue
