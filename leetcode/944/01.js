function minDeletionSize(strs) {
    var row = strs.length;
    if (row <= 1) {
        return 0;
    }
    var col = strs[0].length;
    var ans = 0;
    for (var j = 0; j < col; j++) {
        for (var i = 0; i < row - 1; i++) {
            if (strs[i][j] > strs[i + 1][j]) {
                ans++;
                break;
            }
        }
    }
    return ans;
}
;
