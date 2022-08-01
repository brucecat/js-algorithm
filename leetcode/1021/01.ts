function removeOuterParentheses(s: string): string {
    const ans = new Array(), n = s.length
    for (let i = 0, j = 0, cur = 0; i < n; i = j) {
        j++
        cur++
        while (j < n && cur > 0) {
            cur += s.charCodeAt(j) == '('.charCodeAt(0) ? 1 : -1
            j++
        }
        ans.push(s.substring(i + 1, j - 1))
    }
    return ans.join('')
};
