// 题目：最长回文子串
// 给你一个字符串 s，找到 s 中最长的回文子串。
// 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。
// 示例 1：
// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：
// 输入：s = "cbbd"
// 输出："bb"
// 提示：
// 1 <= s.length <= 1000
// s 仅由数字和英文字母组成

const longestPalindrome = (s: string) => {
    let res: string = '';

    // 获取以 i , j 为中心的最长回文串
    const getLongestPalindrome = (i: number, j: number) => {
        while (i >= 0 && j <= s.length - 1 && s[i] === s[j]) {
            i--;
            j++;
        }
        return s.substring(i + 1, j);
    };

    // 遍历获取最长回文串
    for (let i = 0; i <= s.length - 1; i++) {
        // 奇数情况
        const s1 = getLongestPalindrome(i, i);

        // 偶数情况
        const s2 = getLongestPalindrome(i, i + 1);

        if (s1.length > res.length) {
            res = s1;
        }
        if (s2.length > res.length) {
            res = s2;
        }
    }

    return res;
};

const s1 = 'babad';
const res1 = longestPalindrome(s1);
console.log('res1: ', res1);

const s2 = 'cbbd'
const res2 = longestPalindrome(s2);
console.log('res2: ', res2);
