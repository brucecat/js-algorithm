// 判断s中是否存在t的排列
function checkInclusion(t, s) {
    var need = {}; // 这里存 t 子串中各字符的数量，即需要满足的个数
    var window = {}; // 这里存滑动窗口遍历过程中，处于滑动窗口中的字符
    // 初始化 need, 总共需要哪些字符
    for (var _i = 0, t_1 = t; _i < t_1.length; _i++) {
        var val = t_1[_i];
        need[val] = (need[val] || 0) + 1;
    }
    var left = 0, right = 0;
    var valid = 0; // 要多少个键值对满足 needWhich 中的才算覆盖
    while (right < s.length) {
        var inKey = s[right];
        // 右移窗口
        right += 1;
        // 进行窗口内数据的一系列更新
        if (need[inKey]) {
            // 当前滑动窗口的该键，值 + 1
            window[inKey] = (window[inKey] || 0) + 1;
            // 如果读取到这个字符后
            // 该字符总数 === 覆盖的子串中的该字符总数了
            // 那就总数 + 1
            if (window[inKey] == need[inKey]) {
                valid += 1;
            }
        }
        // 判断左侧窗口是否需要收缩
        while (right - left >= t.length) {
            // 在这里判断是否找到了合法的子串
            if (valid == Object.keys(need).length) {
                return true;
            }
            // outKey是将移出窗口的字符
            var outKey = s[left];
            // 窗口左边界右移
            left++;
            // 如果是 t 字符串中字符,进行窗口内数据的一系列更新
            if (need[outKey]) {
                if (window[outKey] == need[outKey]) {
                    valid -= 1;
                }
                window[outKey] -= 1;
            }
        }
    }
    return false;
}
;
function minWindow(s, t) {
    var need = {}; // 这里存 t 子串中各字符的数量，即需要满足的个数
    var window = {}; // 这里存滑动窗口遍历过程中，处于滑动窗口内部的 t 中的字符
    // 初始化 needWhich，总共需要哪些字符
    for (var _i = 0, t_2 = t; _i < t_2.length; _i++) {
        var val = t_2[_i];
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
