function minAddToMakeValid(s) {
    var stack = [];
    var leftBracket = new Set(["(", "[", "{"]);
    // 右括号需要寻找的另一半
    var rightToLeft = {
        ")": "(",
        "]": "[",
        "}": "{"
    };
    var res = 0;
    // 遍历字符串
    for (var i = 0; i < s.length; i++) {
        var c = s[i];
        if (leftBracket.has(c)) {
            // 放入的是左括号
            stack.push(c);
        }
        else {
            // 放入的是右括号
            if (stack.length == 0) {
                // 栈空 说明需要一个左括号来与之匹配
                res++;
            }
            else {
                // 栈不空
                // 检查上一个括号是否匹配
                if (stack.pop() !== rightToLeft[c]) {
                    // 不匹配的话也需要一个左括号来与之匹配
                    res++;
                }
            }
        }
    }
    // 如果栈还有剩下的左括号
    res += stack.length;
    return res;
}
;
function minAddToMakeValid(s) {
    var res = 0;
    var need = 0; // 记录右括号的需求量
    var leftBracket = new Set(["(", "[", "{"]);
    // 右括号需要寻找的另一半
    var rightToLeft = {
        ")": "(",
        "]": "[",
        "}": "{"
    };
    // 遍历字符串
    for (var i = 0; i < s.length; i++) {
        if (leftBracket.has(s[i])) {
            // 放入的是左括号
            // 对右括号的需求+1
            need++;
        }
        else {
            // 放入的是右括号
            // 对左括号的需求-1
            need--;
            if (need == -1) {
                // 右括号多出来了，需要插入左括号
                need = 0;
                res++;
            }
        }
    }
    return res + need;
}
;
