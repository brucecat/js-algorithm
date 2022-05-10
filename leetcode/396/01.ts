// F(0) = sum(num*idx for idx, num in enumerate(nums))
// F(1) = F(0) + sum(nums) - nums[-1]*n
// F(2) = F(1) + sum(nums) - nums[-2]*n
// F(i) = F(i-1) + sum(nums) - nums[-i]*n 状态转移方程都出来了，那就 dp 安排一下


function maxRotateFunction(nums: number[]): number {
    let len = nums.length
    if (len < 1) return 0

    let dp: number[] = []
    let numsSum = 0

    dp[0] = 0
    nums.forEach((item, index) => {
        dp[0] += item * index
        numsSum += item
    })

    // console.log(dp[0]);
    // console.log(numsSum);



    for (let i = 1; i < len; i++) {
        dp[i] = dp[i - 1] + numsSum - nums[len - i] * len
    }
    // console.log(dp);


    return Math.max(...dp)

};



function maxRotateFunction01(nums: number[]): number {
    let len = nums.length
    if (len < 1) return 0


    let numsSum = 0
    let res = 0
    nums.forEach((item, index) => {
        res += item * index
        numsSum += item
    })
    let cur = res

    while (nums.length > 0) {
        cur += numsSum - nums.pop() * len
        res = cur > res ? cur : res
    }

    return res

};