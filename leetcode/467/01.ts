// https://leetcode.cn/problems/unique-substrings-in-wraparound-string/solution/
function findSubstringInWraproundString(p: string): number {
    const dp = new Array(26).fill(0)
    let cur = 1
    dp[p.charCodeAt(0) - 'a'.charCodeAt(0)] = 1
    for(let i = 1; i < p.length; i++) {
        if((p.charCodeAt(i) - p.charCodeAt(i - 1) + 25) % 26 == 0) {
            cur++
        } else {
            cur = 1
        }
        const idx = p.charCodeAt(i) - 'a'.charCodeAt(0)
        dp[idx] = Math.max(dp[idx], cur)
    }
    return dp.reduce((a, b) => a + b)
};
 
// https://leetcode.cn/problems/unique-substrings-in-wraparound-string/solution/pythonjavajavascriptgo-by-himymben-em9d/