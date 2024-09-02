const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let curLineNum = 0;
let numList: any[] = [];
let times = 0;
rl.on('line', function (line: string) {
    curLineNum++;

    if (curLineNum === 2) {
        numList = line.split(' ').map(Number);
    }

    if (curLineNum === 3) {
        times = Number(line);

        const res = getResult(numList, times);
        console.log(res);
    }
});

const getResult = (numList: number[], times: number) => {
    const len = numList.length;

    // 前缀和数组
    const prefixSumList = new Array(len);

    // 后缀和数组
    const suffixSumList = new Array(len);

    // 计算前缀和
    let tempPreSum = 0;
    for (let i = 0; i <= len - 1; i++) {
        tempPreSum += numList[i];
        prefixSumList[i] = tempPreSum;
    }

    // 计算后缀和
    let tempSufSum = 0;
    for (let i = len - 1; i >= 0; i--) {
        tempSufSum += numList[i];
        suffixSumList[len - 1 - i] = tempSufSum;
    }

    console.log('prefixSumList: ', prefixSumList);
    console.log('suffixSumList: ', suffixSumList);

    prefixSumList.unshift(0);
    suffixSumList.unshift(0);

    // 拿N次拆解成左边拿i个，右边拿N-i个
    let maxRes: number = 0;
    for (let i = 0; i <= times; i++) {
        // 本次能拿到的香蕉数
        const leftSum = prefixSumList[i];
        const rightSum = suffixSumList[times - i];

        maxRes = Math.max(maxRes, leftSum + rightSum);
    }

    return maxRes;
};

// const a = [1, 2, 2, 7, 3, 6, 1];
// const res = getResult(a, 3);

// const b = [1, 2, 3];
// const res2 = getResult(b, 3);

// const c = [4, 2, 2, 3];
// const res3 = getResult(c, 2);
// console.log('res: ', res);
// console.log('res2: ', res2);
// console.log('res3: ', res3);
