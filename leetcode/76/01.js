// 1、我们在字符串S中使⽤双指针中的左右指针技巧，
// 初始化left = right = 0，把索引左闭右开区间 [left, right)称为
// ⼀个「窗⼝」。
// 2、我们先不断地增加right指针扩⼤窗⼝[left, right)，
// 直到窗⼝中的字符串符合要求（包含了T中 的所有字符）。
// 3、此时，我们停⽌增加right，转⽽不断增加left
// 指针缩⼩窗⼝[left, right)，直到窗⼝中的字符串 
// 不再符合要求（不包含T中的所有字符了）。
// 同时，每次增加left，我们都要更新⼀轮结果。
// 4、重复第2和第3步，直到right到达字符串S的尽头。
// "ADOBECODEBANC"
// "ABC"
// "BANC"
function minWindow(s, t) {
    var need = {}; // 这里存 t 子串中各字符的数量，即需要满足的个数
    var window = {}; // 这里存滑动窗口遍历过程中，处于滑动窗口内部的 t 中的字符
    // 初始化 needWhich，总共需要哪些字符
    for (var _i = 0, t_1 = t; _i < t_1.length; _i++) {
        var val = t_1[_i];
        need[val] = (need[val] || 0) + 1;
    }
    // 1、当移动right扩⼤窗⼝，即加⼊字符时，应该更新哪些数据？ 
    // 2、什么条件下，窗⼝应该暂停扩⼤，开始移动left缩⼩窗⼝？ 
    // 3、当移动left缩⼩窗⼝，即移出字符时，应该更新哪些数据？ 
    // 4、我们要的结果应该在扩⼤窗⼝时还是缩⼩窗⼝时进⾏更新？
    var left = 0, right = 0;
    var valid = 0; // 要多少个键值对满足 needWhich 中的才算覆盖
    // 记录最小覆盖子串的起始索引及长度
    var start = 0, len = Number.MAX_VALUE;
    // let maxLength = 100000, maxStartIndex = -1;
    while (right < s.length) {
        // c是移入窗口的字符
        var c = s[right];
        // 右移窗口
        right += 1;
        // 进行窗口内数据的一系列更新
        if (need[c]) {
            // 当前滑动窗口的该键，值 + 1
            window[c] = (window[c] || 0) + 1;
            // 如果读取到这个字符后，该字符总数 === 覆盖的子串中的该字符总数了，那就总数 + 1
            if (window[c] == need[c]) {
                valid += 1;
            }
        }
        // 当验证数量与需要的字符个数一致时，就应该收缩窗口了
        while (valid == Object.keys(need).length) {
            // 在这里更新最小覆盖子串
            if (right - left < len) {
                start = left;
                len = right - left;
            }
            // d是将移出窗口的字符
            var d = s[left];
            // 窗口左边界右移
            left++;
            // 如果是 t 字符串中字符,进行窗口内数据的一系列更新
            if (need[d]) {
                if (window[d] == need[d]) {
                    valid -= 1;
                }
                window[d] -= 1;
            }
        }
    }
    // 返回最小覆盖子串
    return len == Number.MAX_VALUE ? "" : s.slice(start, start + len);
}
;
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow02 = function (s, t) {
    var maxLength = 100000, maxStartIndex = -1;
    var needWhich = {}; // 这里存 t 子串中各字符的数量，即需要满足的个数
    var windowAll = {}; // 这里存滑动窗口遍历过程中，处于滑动窗口内部的 t 中的字符
    // 初始化 needWhich，总共需要哪些字符
    for (var _i = 0, t_2 = t; _i < t_2.length; _i++) {
        var val = t_2[_i];
        needWhich[val] = (needWhich[val] || 0) + 1;
    }
    var left = 0, right = 0;
    var len = s.length, nowSatisfy = 0; // 要多少个键值对满足 needWhich 中的才算覆盖
    while (right < len) {
        var key = s[right]; // 右指针当前遍历到的字符
        right++;
        // 如果是 t 字符串中字符
        if (needWhich[key]) {
            windowAll[key] = (windowAll[key] || 0) + 1; // 当前滑动窗口的该键，值 + 1
            // 如果读取到这个字符后，该字符总数 === 覆盖的子串中的该字符总数了，那就总数 + 1
            if (windowAll[key] === needWhich[key]) {
                nowSatisfy++;
            }
        }
        // 当验证数量与需要的字符个数一致时，就应该收缩窗口了
        while (nowSatisfy === Object.keys(needWhich).length) {
            // 更新最小覆盖子串
            if (right - left < maxLength) {
                maxStartIndex = left;
                maxLength = right - left;
            }
            //即将移出窗口的字符
            var outKey = s[left];
            // 窗口左边界右移
            left++;
            // 如果是 t 字符串中字符
            if (needWhich[outKey]) {
                // 对于要移出窗口的这个字符的个数，如果 窗口内部 和 t 中的相同，即没有多余，那么 nowSatisfy--，开始找下一滑动窗口了，否则还得继续移除该字符
                if (windowAll[outKey] === needWhich[outKey]) {
                    nowSatisfy--;
                }
                windowAll[outKey]--;
            }
        }
    }
    return maxStartIndex === -1 ? "" : s.slice(maxStartIndex, maxStartIndex + maxLength);
};
// 统计字符串中字符出现的次数
function countChar(str, c) {
    var result = Array.prototype.reduce.call(str, function (allWords, curWord) {
        allWords[curWord] ? allWords[curWord]++ : allWords[curWord] = 1;
        return allWords;
    }, {});
    return result[c];
}
//  https://leetcode-cn.com/problems/minimum-window-substring/solution/by-smooth-b-xuj9/
