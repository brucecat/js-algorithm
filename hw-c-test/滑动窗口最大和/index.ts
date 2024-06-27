// 有一个N个整数的数组，和一个长度为M的窗口，窗口从数组内的第一个数开始滑动直到窗口不能滑动为止，

// 每次窗口滑动产生一个窗口和（窗口内所有数的和），求窗口滑动产生的所有窗口和的最大值。

const getResult = (numList, M) => {
    let right = M - 1;

    // 维护一个队列
    const windowQueue = numList.slice(0, M);
    let windowSum = windowQueue.reduce((a, b) => a + b, 0)

    let maxWindowSum = windowSum;

    while (right <= numList.length - 2) {

        // 开始滑动
        right++;

        // 队头出
        const outItem = windowQueue.shift();

        // 队尾入
        const inItem = numList[right];
        windowQueue.push(inItem);

        windowSum = windowSum - outItem + inItem
        maxWindowSum = Math.max(windowSum, maxWindowSum);
    }

    return maxWindowSum;
};

const a = [10, 20, 30, 15, 23, 12];
const b = 3

const res = getResult(a, b);
console.log('res: ', res);