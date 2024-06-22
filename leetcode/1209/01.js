function removeDuplicates(s, k) {
    var stack = [];
    var counter = [];
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var elem = s_1[_i];
        if (stack[stack.length - 1] === elem) {
            counter[counter.length - 1]++;
        }
        else {
            counter.push(1);
        }
        stack.push(elem);
        if (counter[counter.length - 1] === k) {
            stack.splice(stack.length - k, k);
            counter.pop();
        }
    }
    return stack.join('');
}
;
// 正则表达式
function removeDuplicates01(s, k) {
    if (k == 1) {
        return "";
    }
    // 记录上一次的串
    var res = s;
    // 无脑正则删除连续k个重复的字符
    function removeDuplicate() {
        var reg = new RegExp("(.)\\1{" + (k - 1) + "}", "g");
        s = s.replaceAll(reg, "");
    }
    while (true) {
        // 更新s
        removeDuplicate();
        // 比较
        if (res == s) {
            break;
        }
        // 更新记录
        res = s;
    }
    return res;
}
;
// 正则表达式
function removeDuplicates02(s, k) {
    var regExp = new RegExp('(.)\\1{' + (k - 1) + '}');
    var s2 = '';
    while (s2 != s) {
        s2 = s;
        s = s2.replace(regExp, '');
    }
    return s2;
}
;
