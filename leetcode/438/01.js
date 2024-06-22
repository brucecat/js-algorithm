// 输入一个串s，一个串p, 找到s中所有t的排列，返回它们的起始索引
function findAnagrams(s, t) {
    var need = {}; // 这里存 t 子串中各字符的数量，即需要满足的个数
    var window = {}; // 这里存滑动窗口遍历过程中，处于滑动窗口内部的 t 中的字符
    var res = []; // 记录结果
    // 初始化 needWhich，总共需要哪些字符
    for (var _i = 0, t_1 = t; _i < t_1.length; _i++) {
        var val = t_1[_i];
        need[val] = (need[val] || 0) + 1;
    }
    var left = 0, right = 0;
    var valid = 0; // 要多少个键值对满足 needWhich 中的才算覆盖
    // 1、当移动right扩⼤窗⼝，即加⼊字符时，应该更新哪些数据？ 
    // 2、什么条件下，窗⼝应该暂停扩⼤，开始移动left缩⼩窗⼝？ 
    // 3、当移动left缩⼩窗⼝，即移出字符时，应该更新哪些数据？ 
    // 4、我们要的结果应该在扩⼤窗⼝时还是缩⼩窗⼝时进⾏更新？
    while (right < s.length) {
        // 移入窗口的key
        var inKey = s[right];
        right++;
        // 进行窗口内数据的更新
        if (need[inKey]) {
            window[inKey] = (window[inKey] || 0) + 1;
            if (window[inKey] == need[inKey]) {
                valid++;
            }
        }
        // 判断左侧窗口是否要收缩
        // while(right - left >= t.length){
        while (right - left == t.length)
            // 当窗口符合条件时，放入res
            if (valid == Object.keys(need).length) {
                res.push(left);
            }
        // outKey是移出窗口的字符
        var outKey = s[left];
        // 窗口左边界右移
        left++;
        // 如果是t中字符，更新window
        if (need[outKey]) {
            if (window[outKey] == need[outKey]) {
                valid--;
            }
            window[outKey]--;
        }
    }
}
return res;
;
