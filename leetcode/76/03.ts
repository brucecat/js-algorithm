function minWindow(s: string, t: string): string {
    let charList = Array.from(s);
    let tCharList = Array.from(t);

    // 需要满足的
    let need = new Map();
    tCharList.forEach((c) => {
        if (!need.has(c)) {
            need.set(c, 0);
        }
        need.set(c, need.get(c) + 1);
    });
    const needValidNum = need.size;

    // 维护一个滑动窗口
    let left = 0;
    let right = 0;

    let window = new Map();

    // 当前窗口符合条件的个数
    let validNum = 0;

    // 记录最小覆盖子串的起始索引及长度
    let start = 0;
    let len = Infinity;

    // 维护滑动窗口的过程
    while (right <= charList.length - 1) {
        // 移入一个字符
        let curChar = charList[right];
        right++;

        // 进行窗口内数据的一系列更新
        if (need.get(curChar)) {
            window.set(curChar, (window.get(curChar) || 0) + 1);
            if (window.get(curChar) === need.get(curChar)) validNum++;
        }

        while (validNum === needValidNum) {
            if (right - left < len) {
                start = left;
                len = right - left;
            }

            // 收缩左边界
            let leftChar = charList[left];
            left++;

            // 进行窗口内数据的一系列更新
            if (need.get(leftChar)) {
                if (window.get(leftChar) === need.get(leftChar)) validNum--;
                window.set(leftChar, window.get(leftChar) - 1);
            }
        }
    }

    return len === Infinity ? '' : s.slice(start, start + len);
}

const s = 'ADOBECODEBANC';
const t = 'ABC';
const res = minWindow(s, t);
console.log('res: ', res);

// console.log('当前窗口符合条件');
// console.log('cur window: ', window);
// console.log(right)
// console.log(left)
// console.log('res: ', res);
// console.log('minResLen: ', minResLen);
