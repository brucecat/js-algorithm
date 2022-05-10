function diStringMatch(s: string): number[] {
    let n = s.length, idx = 0;
    let left = 0, right = n

    let ans = new Array(n + 1)
    for (let i = 0; i < n; i++) {
        ans[idx] = s[i] == 'I' ? left++ : right--
        idx++
    }
    ans[idx] = left;
    return ans;

};