// export default {};

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param input int整型一维数组
 * @param k int整型
 * @return int整型一维数组
 */
function GetLeastNumbers_Solution(input: number[], k: number): number[] {
    // write code here

    const pq = new PriorityQueue(k);

    for (let i = 0; i < input.length; i++) {
        pq.insert(input[i]);
    }

    console.log(pq.getQueue());

    return [];
}

// 大顶堆
class PriorityQueue {
    private queue: number[] = [];
    private capacity = 0;

    constructor(capacity) {
        this.capacity = capacity;
    }

    getMax() {
        return this.queue[0];
    }

    popMax() {
        this.queue.shift();
    }

    insert(val) {
        if (this.queue.length < this.capacity) {
            this.put(val);
        } else {
            if (this.getMax() > val) {
                this.popMax();
                this.put(val);
            }
        }
    }

    // 把数字正确地放到对应的位置
    private put(val) {
        let index = 0;
        while (this.queue[index] > val) {
            index++;
        }

        this.queue.splice(index, 0, val);
    }

    getQueue() {
        return this.queue.concat();
    }
}

const a = [4, 5, 1, 6, 2, 7, 3, 8];
const b = 4;

const res = GetLeastNumbers_Solution(a, b);
console.log('res: ', res);
