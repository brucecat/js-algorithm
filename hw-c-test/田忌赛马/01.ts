// 题目描述
// 给定两个只包含数字的数组a，b，调整数组 a 里面的数字的顺序，使得尽可能多的a[i] > b[i]。

// 数组a和b中的数字各不相同。

// 输出所有可以达到最优结果的a数组的结果。

// 输入描述
// 输入的第一行是数组 a 中的数字，其中只包含数字，每两个数字之间相隔一个空格，a数组大小不超过10。

// 输入的第二行是数组 b 中的数字，其中只包含数字，每两个数字之间相隔一个空格，b数组大小不超过10。

// 输出描述
// 输出所有可以达到最优结果的 a 数组的数量。

// 获取一个数组的全排列
const getFullPermutation = (numList) => {
    const res = [];
    const track = [];

    // 记录已经使用过的数组
    const isVisited = [];

    const backTrack = (track, used) => {
        // 到达尽头
        if (track.length === numList.length) {
            res.push(track.concat());
            return;
        }

        for (let i = 0; i < numList.length; i++) {
            if (used[i]) {
                continue;
            }

            // 做选择
            track.push(numList[i]);
            used[i] = true;

            // 进入下一层决策树
            backTrack(track, used);

            // 撤销选择
            track.pop();
            used[i] = false;
        }
    };

    // 开始回溯
    backTrack(track, isVisited);

    return res;
};

const getResult = (aList, bList) => {
    // 在这个排列模式下,a赢的个数
    const countAWin = (aCurList, bCurList) => {
        let res = 0;
        for (let i = 0; i < aCurList.length; i++) {
            if (aCurList[i] > bCurList[i]) {
                res++;
            }
        }
        return res;
    };

    // 获取全排列
    const aAllList = getFullPermutation(aList);
    // const bAllList = getFullPermutation(bList);

    console.log('aAllList: ', aAllList);

    let res = 0;

    // 最优情况数
    let maxAWinCase = 0;

    for (let i = 0; i < aAllList.length; i++) {
        const aWin = countAWin(aAllList[i], bList);
        console.log('aWin: ', aWin);

        if (aWin > maxAWinCase) {
            res = 1;
            maxAWinCase = aWin;
        } else if (aWin === maxAWinCase) {
            res++;
        }
    }

    return res;
};

const a = [11, 8, 20];
const b = [10, 13, 7];
const res = getResult(a, b);
console.log('res: ', res);

console.log('--------------------');

const a1 = [1, 2, 3];
const b1 = [4, 5, 6];
const res1 = getResult(a1, b1);
console.log('res1: ', res1);

console.log('--------------------');

const a2 = [11, 12, 20];
const b2 = [10, 13, 7];
const res2 = getResult(a2, b2);
console.log('res2: ', res2);

// if (bestA !== aAllList[i].join(',')) {
//   if (aWin > maxWinCase) {
//       res = 1;
//       maxWinCase = aWin;
//       bestA = aAllList[i].join(',');
//   }
// } else {
//   if (aWin === maxWinCase) {
//       res++;
//   }
// }
