function lengthOfLongestSubstring(s) {
    // 这里存滑动窗口遍历过程中，处于滑动窗口内部的 s 中的字符
    var window = {};
    // 结果
    var maxLen = 0;
    // 窗口左边和右边
    var left = 0, right = 0;
    while (right < s.length) {
        // inKey是移入窗口的字符
        var inKey = s[right];
        right++;
        // 进行窗口内数据的一系列更新
        window[inKey] = (window[inKey] || 0) + 1;
        // 判断左侧窗口什么时候要收缩
        while (window[inKey] > 1) {
            // outKey是将移出窗口的字符
            var outKey = s[left];
            left++;
            // 进行窗口内数据的一系列更新
            window[outKey]--;
        }
        // 当前的window是没有重复char的
        maxLen = Math.max(maxLen, right - left);
    }
    return maxLen;
}
;
