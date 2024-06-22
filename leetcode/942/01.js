function diStringMatch(s) {
    var n = s.length, idx = 0;
    var left = 0, right = n;
    var ans = new Array(n + 1);
    for (var i = 0; i < n; i++) {
        ans[idx] = s[i] == 'I' ? left++ : right--;
        idx++;
    }
    ans[idx] = left;
    return ans;
}
;
