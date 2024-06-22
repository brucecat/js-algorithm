// https://leetcode.cn/problems/kth-smallest-number-in-multiplication-table/solution/dong-tu-yan-shi-by-xiaohu9527-3k7s/
function findKthNumber(m, n, k) {
    var left = 1;
    var right = m * n;
    while (left < right) {
        var mid = (left + right) >> 1;
        if (cnt(mid, m, n) < k) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    return left;
}
;
function cnt(mid, m, n) {
    var ret = 0;
    var i = m;
    var j = 1;
    while (i >= 1 && j <= n) {
        if (i * j <= mid) {
            ret += i;
            j += 1;
        }
        else {
            i -= 1;
        }
    }
    return ret;
}
