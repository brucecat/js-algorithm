function maxHeight(cuboids) {
    var n = cuboids.length;
    for (var _i = 0, cuboids_1 = cuboids; _i < cuboids_1.length; _i++) {
        var v = cuboids_1[_i];
        v.sort(function (a, b) { return a - b; });
    }
    cuboids.sort(function (a, b) { return a[0] + a[1] + a[2] - (b[0] + b[1] + b[2]); });
    var ans = 0;
    // dp[i]表示以第i个长方体(w,l,h)为最后一个长方体的最大堆叠高度
    var dp = new Array(n).fill(0);
    for (var i = 0; i < n; i++) {
        dp[i] = cuboids[i][2];
        for (var j = 0; j < i; j++) {
            if (cuboids[i][0] >= cuboids[j][0] && cuboids[i][1] >= cuboids[j][1] && cuboids[i][2] >= cuboids[j][2]) {
                dp[i] = Math.max(dp[i], dp[j] + cuboids[i][2]);
            }
        }
        ans = Math.max(ans, dp[i]);
    }
    // 返回dp数组的最大值
    return ans;
}
