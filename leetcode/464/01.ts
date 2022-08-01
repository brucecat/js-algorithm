// 枚举每次取数字能不能赢，对方赢不了就是自己能赢
function canIWin(maxChoosableInteger: number, desiredTotal: number): boolean {
    const dp = new Array(1 << maxChoosableInteger).fill(null);
    const dfs = (state: number) => {
        if(dp[state] != null) {
            return dp[state]
        }
        let sum = 0
        for(let i = 0; i < maxChoosableInteger; i++) {
            if((state >> i & 1) == 1) {
                sum += i + 1
            }
        }
        for(let i = 0; i < maxChoosableInteger; i++) {
            if((state >> i & 1) == 0) {
                if(sum + i + 1 >= desiredTotal || !dfs(state | 1 << i)) {
                    dp[state] = true
                    return true
                }
            }
        }
        dp[state] = false
        return false
    }

    return (maxChoosableInteger + 1) * maxChoosableInteger >= desiredTotal && dfs(0)
};

 