// 一只贪吃的猴子，来到一个果园，发现许多串香蕉排成一行，每串香蕉上有若干根香蕉。每串香蕉的根数由数组numbers给出。

// 猴子获取香蕉，每次都只能从行的开头或者末尾获取，并且只能获取N次，求猴子最多能获取多少根香蕉。

const getResult = (numList: number[], times: number) => {
    const len = numList.length;

    if (len === 0 || times === 0) return 0;

    // 维护一个前缀和数组
    const prefixSumList = new Array(len + 1).fill(0);
    let preSum = 0;
    for (let i = 1; i < len + 1; i++) {
        // 计算前缀和
        preSum += numList[i - 1];
        prefixSumList[i] = preSum;
    }

    // 维护一个后缀和数组
    const suffixSumList = new Array(len + 1).fill(0);
    let suffixSum = 0;
    for (let i = 1; i < len + 1; i++) {
        // 计算后缀和
        suffixSum += numList[len - i];
        suffixSumList[i] = suffixSum;
    }

    // 从左边连续拿k次，拿多少根香蕉
    const pickLeft = (x) => {
        return prefixSumList[x];
    };

    // 从右边拿
    const pickRight = (x) => {
        return suffixSumList[x];
    };

    let res = 0;
    let leftTimes = 0;
    let rightTimes = 0;

    for (let i = 0; i <= times; i++) {
        const curLeftTimes = i;
        const curRightTimes = times - i;
        const curSum = pickLeft(curLeftTimes) + pickRight(curRightTimes);

        if (curSum > res) {
            res = curSum;
            leftTimes = curLeftTimes;
            rightTimes = curRightTimes;
        }
    }
    console.log('res: ', res);
    console.log('leftTimes: ', leftTimes);
    console.log('rightTimes: ', rightTimes);

    return res;
};

const a = [1, 2, 2, 7, 3, 6, 1];
const res = getResult(a, 3);

const b = [1, 2, 3];
const res1 = getResult(b, 3);

const c = [4, 2, 2, 3];
const res2 = getResult(c, 2);
