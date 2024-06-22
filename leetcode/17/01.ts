const letterMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
};

function letterCombinations(digits: string): string[] {
    if (digits.length < 1) {
        return [];
    }

    // 开始回溯
    const res = [];

    const backtrack = (track, num) => {
        // 触发结束条件
        if (track.length == digits.length) {
            res.push(track);
            return;
        }

        // 当前数字对应的字母
        const letters = letterMap[digits[num]];

        // 每个字母都是一个选择
        for (const l of letters) {
            // 进入下一层决策树
            backtrack(track + l, num + 1);
        }
    };
    backtrack('', 0);

    // dfs('', 0); // 递归的入口，初始字符串为''，从下标0开始翻译

    return res;
}

const digits = '234';

letterCombinations(digits);

// // 可供的选择
// const curNums = digits.split('').reduce((pre, cur) => {
//     pre.push(cur);
//     return pre;
// }, []);
