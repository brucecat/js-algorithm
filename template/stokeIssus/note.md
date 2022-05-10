### Javascript

[买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock)

[买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)

[买卖股票的最佳时机 III](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/)

[买卖股票的最佳时机 IV](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/)

[最佳买卖股票时机含冷冻期](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)

[买卖股票的最佳时机含手续费](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)

**第一题**

[买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock)，相当于`k=1`的情形。

```js
var maxProfit = function (prices) {
  let n = prices.length
  if (n <= 1) {
    return 0
  }
  let dp = new Array(n)

  dp.fill([0, 0], 0, n)

  // base case
  // 解释：
  //   dp[i][0]
  // = max(dp[-1][0], dp[-1][1] + prices[i])
  // = max(0, -infinity + prices[i]) = 0
  // dp[0][0] = 0;

  // 解释：
  //   dp[i][1]
  // = max(dp[-1][1], dp[-1][0] - prices[i])
  // = max(-infinity, 0 - prices[i])
  // = -prices[i]
  dp[0][1] = -prices[0]

  // 状态转移
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
  }
  return dp[n - 1][0]
}
```

状态压缩

```js
var maxProfit = function (prices) {
  let n = prices.length

  // base case
  let dp_i_0 = 0,
    dp_i_1 = -prices[0]

  for (let i = 1; i < n; i++) {
    // dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])

    // dp[i][1] = max(dp[i-1][1], -prices[i])
    dp_i_1 = Math.max(dp_i_1, -prices[i])
  }
  return dp_i_0
}
```

**第二题**

[买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)，相当于`k = +infinity`的情形。

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let n = prices.length
  let dp = new Array(n)
  dp.fill([0, 0], 0, n)

  dp[0][0] = 0
  dp[0][1] = -prices[0]

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }
  return dp[n - 1][0]
}
```

状态压缩

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let n = prices.length

  // base case
  let dp_i_0 = 0,
    dp_i_1 = -prices[0]

  for (let i = 0; i < n; i++) {
    // dp[i][0] = Math.max(
    //             dp[i - 1][0],
    //             dp[i - 1][1] + prices[i]
    //         )
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])

    //  dp[i][1] = Math.max(
    //             dp[i - 1][1],
    //             dp[i - 1][0] - prices[i]
    //         )
    dp_i_1 = Math.max(dp_i_1, dp_i_0 - prices[i])
  }

  return dp_i_0
}
```

**第三题**

[最佳买卖股票时机含冷冻期](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)，相当于`k = +infinity with cooldown`的情形。

- 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
- 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。

```
dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
dp[i][1] = max(dp[i-1][1], dp[i-2][0] - prices[i])
解释：第 i 天选择 buy 的时候，要从 i-2 的状态转移，而不是 i-1 。
```

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let n = prices.length

  if (n < 2) {
    return 0
  }
  if (n === 2) {
    return Math.max(prices[1] - prices[0], 0)
  }
  let dp = new Array(n)
  for (let i = 0; i < n; i++) {
    dp[i] = [0, 0]
  }
  // base case
  // dp[0][0] = 0;
  dp[0][1] = -prices[0]
  dp[1][0] = Math.max(dp[0][0], dp[0][1] + prices[1])
  dp[1][1] = Math.max(dp[0][1], dp[0][0] - prices[1])

  // 状态转移
  for (let i = 2; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(
      dp[i - 1][1],
      dp[i - 2][0] - prices[i] // 买被限制在卖一天后了
    )
  }

  return dp[n - 1][0]
}
```

状态压缩

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let n = prices.length
  let dp_i_0 = 0
  let dp_i_1 = -Infinity // 还未买入
  let dp_pre_0 = 0 // 代表 dp[i-2][0]

  for (let i = 0; i < n; i++) {
    let temp = dp_i_0
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, dp_pre_0 - prices[i])
    dp_pre_0 = temp
  }
  return dp_i_0
}
```

**第四题**

[买卖股票的最佳时机含手续费](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)。`k = +infinity with fee`的情形。

每次交易要支付手续费，只要把手续费从利润中减去即可。

```
dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i] - fee)
解释：相当于买入股票的价格升高了。
在第一个式子里减也是一样的，相当于卖出股票的价格减小了。
```

```js
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let n = prices.length
  let dp = new Array(n)
  for (let i = 0; i < n; i++) {
    dp[i] = [0, 0]
  }

  // base case
  // dp[0][0] = 0;
  dp[0][1] = -prices[0] - fee

  // 状态转移
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(
      dp[i - 1][1],
      dp[i - 1][0] - prices[i] - fee // 相当于买入股票的价格升高了
    )
  }

  return dp[n - 1][0]
}
```

状态压缩

```js
var maxProfit = function (prices, fee) {
  let n = prices.length

  // base case
  let dp_i_0 = 0,
    dp_i_1 = -prices[0] - fee

  for (let i = 0; i < n; i++) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, dp_i_0 - prices[i] - fee)
  }

  return dp_i_0
}
```

**第五题**

[买卖股票的最佳时机 III](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/)。`k = 2 `的情形。

```
dp[-1][k][0] = 0
解释：因为 i 是从 0 开始的，所以 i = -1 意味着还没有开始，这时候的利润当然是 0 。
dp[-1][k][1] = -infinity
解释：还没开始的时候，是不可能持有股票的，用负无穷表示这种不可能。
dp[i][0][0] = 0
解释：因为 k 是从 1 开始的，所以 k = 0 意味着根本不允许交易，这时候利润当然是 0 。
dp[i][0][1] = -infinity
解释：不允许交易的情况下，是不可能持有股票的，用负无穷表示这种不可能。


dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
              max(   选择 rest  ,             选择 sell      )

解释：今天我没有持有股票，有两种可能：
要么是我昨天就没有持有，然后今天选择 rest，所以我今天还是没有持有；
要么是我昨天持有股票，但是今天我 sell 了，所以我今天没有持有股票了。

dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])
              max(   选择 rest  ,           选择 buy         )

解释：今天我持有着股票，有两种可能：
要么我昨天就持有着股票，然后今天选择 rest，所以我今天还持有着股票；
要么我昨天本没有持有，但今天我选择 buy，所以今天我就持有股票了。
```

```js
var maxProfit = function (prices) {
  //第一次 买入， 卖出的利润
  let profit_1_in = -prices[0],
    profit_1_out = 0
  //继第一次之后，第二次买入卖出的利润
  let profit_2_in = -prices[0],
    profit_2_out = 0
  let n = prices.length
  for (let i = 1; i < n; i++) {
    profit_2_out = Math.max(profit_2_out, profit_2_in + prices[i])
    //第二次买入后的利润， 第一次卖出的利润 - prices[i]
    profit_2_in = Math.max(profit_2_in, profit_1_out - prices[i])
    profit_1_out = Math.max(profit_1_out, profit_1_in + prices[i])
    //第一次买入后，利润为 -prices[i]
    profit_1_in = Math.max(profit_1_in, -prices[i])
  }
  return profit_2_out
}
```

**第六题**

[买卖股票的最佳时机 IV](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/)。k = any integer 的情形。

```js
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (!prices.length) {
    return 0
  }

  const n = prices.length
  k = Math.min(k, Math.floor(n / 2))
  const buy = new Array(k + 1).fill(0)
  const sell = new Array(k + 1).fill(0)

  buy[0] = -prices[0]
  sell[0] = 0
  for (let i = 1; i < k + 1; ++i) {
    buy[i] = sell[i] = -Number.MAX_VALUE
  }

  for (let i = 1; i < n; ++i) {
    buy[0] = Math.max(buy[0], sell[0] - prices[i])
    for (let j = 1; j < k + 1; ++j) {
      buy[j] = Math.max(buy[j], sell[j] - prices[i])
      sell[j] = Math.max(sell[j], buy[j - 1] + prices[i])
    }
  }

  return Math.max(...sell)
}
```
