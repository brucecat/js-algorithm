var Node = /** @class */ (function () {
    function Node(data, priority) {
        this.data = data;
        this.priority = priority;
    }
    return Node;
}());
// 大顶堆 队头是最大值
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.queue = [];
    }
    /** 入队 */
    PriorityQueue.prototype.enqueue = function (data, priority) {
        var node = new Node(data, priority);
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
    return PriorityQueue;
}());
function advantageCount(nums1, nums2) {
    var n = nums1.length;
    // maxpq是一个优先级队列，给sum2降序排序
    var maxpq = new PriorityQueue();
    for (var i = 0; i < n; i++) {
        // 后面入队
        maxpq.enqueue([i, nums2[i]], -nums2[i]);
    }
    // 给sum1升序排序
    nums1 = nums1.sort(function (a, b) {
        return a - b;
    });
    var left = 0, right = n - 1;
    var res = [];
    while (!maxpq.isEmpty()) {
        // 前面出队
        var pair = maxpq.dequeue();
        // maxval是nums2中的最大值，i是对应的索引
        var i = pair[0], maxval = pair[1];
        if (maxval < nums1[right]) {
            // 如果nums1[right]能胜过maxval，那就自己上
            res[i] = nums1[right];
            right--;
        }
        else {
            // 否则用最小值跟nums2浑水摸鱼
            res[i] = nums1[left];
            left++;
        }
    }
    return res;
}
;
function advantageCount01(nums1, nums2) {
    var n = nums1.length;
    // maxpq是一个优先级队列，给sum2降序排序
    var maxpq = [];
    for (var i = 0; i < n; i++) {
        // 后面入队
        maxpq.push([i, nums2[i]]);
    }
    maxpq = maxpq.sort(function (pair1, pair2) {
        return pair2[1] - pair1[1];
    });
    // 给sum1升序排序
    nums1 = nums1.sort(function (a, b) {
        return a - b;
    });
    var left = 0, right = n - 1;
    var res = [];
    while (maxpq.length > 0) {
        // 前面出队
        var pair = maxpq.shift();
        // maxval是nums2中的最大值，i是对应的索引
        var i = pair[0], maxval = pair[1];
        if (maxval < nums1[right]) {
            // 如果nums1[right]能胜过maxval，那就自己上
            res[i] = nums1[right];
            right--;
        }
        else {
            // 否则用最小值跟nums2浑水摸鱼
            res[i] = nums1[left];
            left++;
        }
    }
    return res;
}
;
function advantageCount02(nums1, nums2) {
    // 升序
    nums1 = nums1.sort(function (a, b) { return a - b; });
    // 小顶堆
    var maxpq = nums2.map(function (item, index) { return [index, item]; }).sort(function (a, b) { return a[1] - b[1]; });
    var result = [];
    var left = 0, right = nums1.length - 1;
    for (var i = maxpq.length - 1; i >= 0; i--) {
        // 
        var cur2 = maxpq[i];
        var cur1 = nums1[right];
        if (cur1 > cur2[1]) {
            result[cur2[0]] = cur1;
            right--;
        }
        else {
            result[cur2[0]] = nums1[left];
            left++;
        }
    }
    return result;
}
;
