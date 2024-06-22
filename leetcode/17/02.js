const letters = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
};

function letterCombinations(digits) {
    const res = [];

    const curNums = digits.split('').reduce((pre, cur) => {
        pre.push(cur);
        return pre;
    }, []);

    // 按数字来回溯

    return res;
}
