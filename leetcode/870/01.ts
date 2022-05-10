
class Node {
    public data: any
    public priority: number
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
    }
}


// 大顶堆 队头是最大值
class PriorityQueue {
    private queue: any[]

    constructor() {
        this.queue = [];
    }

    /** 入队 */
    enqueue(data, priority) {
        const node = new Node(data, priority);
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
        if (!this.isEmpty()) {
            return this.queue.shift().data;
        }
        return null
    }

    // 判空
    isEmpty() {
        return this.queue.length === 0
    }
}

function advantageCount(nums1: number[], nums2: number[]): number[] {
    let n: number = nums1.length

    // maxpq是一个优先级队列，给sum2降序排序
    let maxpq = new PriorityQueue()

    for (let i = 0; i < n; i++) {
        // 后面入队
        maxpq.enqueue([i, nums2[i]], -nums2[i])
    }

    // 给sum1升序排序
    nums1 = nums1.sort((a, b) => {
        return a - b
    })

    let left = 0, right = n - 1
    let res = []

    while (!maxpq.isEmpty()) {
        // 前面出队
        let pair = maxpq.dequeue()

        // maxval是nums2中的最大值，i是对应的索引
        let [i, maxval] = pair

        if (maxval < nums1[right]) {
            // 如果nums1[right]能胜过maxval，那就自己上
            res[i] = nums1[right]
            right--
        } else {
            // 否则用最小值跟nums2浑水摸鱼
            res[i] = nums1[left]
            left++
        }
    }
    return res
};



function advantageCount01(nums1: number[], nums2: number[]): number[] {
    let n: number = nums1.length

    // maxpq是一个优先级队列，给sum2降序排序
    let maxpq: number[][] = []

    for (let i = 0; i < n; i++) {
        // 后面入队
        maxpq.push([i, nums2[i]])
    }

    maxpq = maxpq.sort((pair1, pair2) => {
        return pair2[1] - pair1[1]
    })

    // 给sum1升序排序
    nums1 = nums1.sort((a, b) => {
        return a - b
    })

    let left = 0, right = n - 1
    let res = []

    while (maxpq.length > 0) {
        // 前面出队
        let pair = maxpq.shift()

        // maxval是nums2中的最大值，i是对应的索引
        let [i, maxval] = pair

        if (maxval < nums1[right]) {
            // 如果nums1[right]能胜过maxval，那就自己上
            res[i] = nums1[right]
            right--
        } else {
            // 否则用最小值跟nums2浑水摸鱼
            res[i] = nums1[left]
            left++
        }
    }

    return res
};




function advantageCount02(nums1: number[], nums2: number[]): number[] {
    // 升序
    nums1 = nums1.sort((a, b) => a - b);

    // 小顶堆
    const maxpq = nums2.map((item, index) => [index, item]).sort((a, b) => a[1] - b[1])

    let result = [];
    let left = 0, right = nums1.length - 1;
    for (let i = maxpq.length - 1; i >= 0; i--) {
        // 
        const cur2 = maxpq[i];
        const cur1 = nums1[right];
        if (cur1 > cur2[1]) {
            result[cur2[0]] = cur1;
            right--;
        } else {
            result[cur2[0]] = nums1[left];
            left++;
        }
    }
    return result;
};