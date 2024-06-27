// 全排列

const getFullPermutation = (num) => {
    const numList = [];

    for (let i = 1; i <= num; i++) {
        numList.push(i);
    }

    console.log('numList: ', numList);

    // 全排列结果
    const res = [];

    const used = [];

    const backTrack = (track, used) => {
        if (track.length === numList.length) {
            res.push(track);
            return;
        }

        for (let i = 0; i < numList.length; i++) {
            if (used[i]) {
                // 用过了，就不走这条路了
                continue;
            }

            // 做选择
            track = `${track}${numList[i]}`;
            used[i] = true;

            // 进入下一层决策树
            backTrack(track, used);

            // 撤销选择
            track = track.substring(0, track.length - 1);
            used[i] = false;
        }
    };

    backTrack('', used);

    console.log('全排列结果 res: ', res);
    return res;
};

const getResult = (num, k) => {
    const fullPermutation = getFullPermutation(num);
    const res = fullPermutation[k - 1];
    return res;
};

const res = getResult(2, 2);
console.log('res: ', res);
