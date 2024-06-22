function binaryGap(n) {
    var res = 0;
    var binary = n.toString(2);
    // 开头必定是1
    var left = 0;
    for (var i = 1; i < binary.length; i++) {
        var element = binary[i];
        if (element == '1') {
            // 更新最大距离
            res = Math.max(res, i - left);
            // 更新距离计算的起点
            left = i;
        }
    }
    return res;
}
;
