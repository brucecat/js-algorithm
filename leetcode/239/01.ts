// 实现一个单调队列
class MonoQueue {
    queue: number[];

    constructor() {
        this.queue = [];
    }

    // 推入
    push(num) {
        // 小于num的全部抛出去
        while (!this.isEmpty() && this.getLastElement() < num) {
            this.queue.pop();
        }
        this.queue.push(num);
    }

    // 获取最大元素
    getMaxElement() {
        return this.queue[0];
    }

    // 获取末端的元素
    getLastElement() {
        return this.queue[this.queue.length - 1];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    // 弹出目标元素
    pop(num) {
        if (num === this.getMaxElement()) {
            this.queue.shift();
        }
        // 否则已经弹出
    }
}

// 单调队列
function maxSlidingWindow(nums: number[], k: number): number[] {
    const len = nums.length;
    let resultArr = [];

    const monoQueue = new MonoQueue();

    // 初始化base情况
    for (let i = 0; i <= k - 1; i++) {
        monoQueue.push(nums[i]);
    }
    resultArr.push(monoQueue.getMaxElement());

    // 窗口开始滑动
    for (let windowEnd = k; windowEnd < len; windowEnd++) {
        // 删除最左端的数字
        const windowStart = windowEnd - k;
        monoQueue.pop(nums[windowStart]);

        // 放入当前元素
        monoQueue.push(nums[windowEnd]);

        // 记录当前窗口最大值
        resultArr.push(monoQueue.getMaxElement());
    }

    return resultArr;
}
