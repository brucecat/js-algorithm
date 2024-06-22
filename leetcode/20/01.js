function isValid(s) {
    var stack = [];
    var leftBracket = new Set(["(", "[", "{"]);
    // let rightBracket = new Set([")", "]", "}"])
    // 右括号需要寻找的另一半
    var rightToLeft = {
        ")": "(",
        "]": "[",
        "}": "{"
    };
    for (var i = 0; i < s.length; i++) {
        var c = s[i];
        if (leftBracket.has(c)) {
            // 放入的是左括号
            stack.push(c);
        }
        else {
            // 放入的是右括号
            if (stack.length == 0) {
                return false;
            }
            // 检查上一个括号是否匹配
            if (stack.pop() !== rightToLeft[c]) {
                return false;
            }
        }
    }
    if (stack.length == 0) {
        return true;
    }
    return false;
}
;