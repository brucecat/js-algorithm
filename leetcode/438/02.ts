// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。

function findAnagrams(s: string, p: string): number[] {
    let sCharList = Array.from(s);
    let pCharList = Array.from(p);

    let need = {};
    let window = {};

    // 维护need
    pCharList.forEach((c) => {
        need[c] = (need[c] || 0) + 1;
    });

    // 最终返回结果
    let resList = [];

    // 维护滑动窗口
    let validateNum = 0;
    let right = 0;
    let left = 0;
    while (right < sCharList.length) {
        // 移入一个字符
        let inChar = sCharList[right];
        right++;

        // 维护窗口信息
        if (need[inChar]) {
            window[inChar] = (window[inChar] || 0) + 1;

            if (window[inChar] === need[inChar]) validateNum++;
        }

        while (right - left >= pCharList.length) {
            // 判断是否满足条件
            if (validateNum === Object.keys(need).length) {
                resList.push(left);
            }

            // 移出一个字符
            let outChar = sCharList[left];
            left++;

            // 窗口内数据维护
            if (need[outChar]) {
                if (window[outChar] === need[outChar]) validateNum--;
                window[outChar] = window[outChar] - 1;
            }
        }
    }

    return resList;
}

const s = 'cbaebabacd';
const p = 'abc';
const res = findAnagrams(s, p);
console.log('res: ', res);
