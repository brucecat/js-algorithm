function reverse(x) {
    if (x < -2147483647 || x > 2147483648) {
        return 0;
    }
    var s = x + '';
    var isPositive = !s.startsWith("-");
    if (!isPositive) {
        s = s.slice(1, s.length);
    }
    var stack = [];
    var resStr = "";
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var c = s_1[_i];
        stack.push(c);
    }
    while (stack.length > 0) {
        resStr += stack.pop();
    }
    var res = +resStr;
    if (!isPositive) {
        res = -res;
    }
    return res;
}
;
