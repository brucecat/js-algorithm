var letterMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
};
function letterCombinations(digits) {
    if (digits.length < 1) {
        return [];
    }
    // 开始回溯
    var res = [];
    var backtrack = function (track, num) {
        // 触发结束条件
        if (track.length == digits.length) {
            res.push(track);
            return;
        }
        // 当前数字对应的字母
        var letters = letterMap[digits[num]];
        // 每个字母都是一个选择
        for (var _i = 0, letters_1 = letters; _i < letters_1.length; _i++) {
            var l = letters_1[_i];
            // 进入下一层决策树
            backtrack(track + l, num + 1);
        }
    };
    backtrack('', 0);
    // dfs('', 0); // 递归的入口，初始字符串为''，从下标0开始翻译
    return res;
}
var digits = '234';
console.log(letterCombinations(digits))
// // 可供的选择
// const curNums = digits.split('').reduce((pre, cur) => {
//     pre.push(cur);
//     return pre;
// }, []);
