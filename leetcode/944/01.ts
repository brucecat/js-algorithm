function minDeletionSize(strs: string[]): number {
    let row = strs.length
    if (row <= 1) {
        return 0
    }
    let col = strs[0].length
    let ans = 0
    for (let j = 0; j < col; j++) {
        for (let i = 0; i < row - 1; i++) {
            if (strs[i][j] > strs[i + 1][j]) {
                ans++
                break
            }
        }
    }
    return ans
};