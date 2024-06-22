// 既然每个区间的start是唯一的,那么我们按start排序(保留原坐标),
// 然后对每个区间二分找它的右侧区间即可。
function findRightInterval(intervals) {
    var n = intervals.length;
    var startIdxs = new Array(n).fill(0).map(function () { return new Array(2).fill(0); });
    for (var i = 0; i < n; i++) {
        startIdxs[i][0] = intervals[i][0];
        startIdxs[i][1] = i;
    }
    startIdxs.sort(function (a, b) { return a[0] - b[0]; });
    var ans = new Array(n).fill(-1);
    for (var i = 0; i < n; i++) {
        var left = 0, right = n;
        while (left < right) {
            var mid = left + right >> 1;
            if (startIdxs[mid][0] < intervals[i][1]) {
                left = mid + 1;
            }
            else {
                right = mid;
            }
        }
        if (left < n) {
            ans[i] = startIdxs[left][1];
        }
    }
    return ans;
}
;
