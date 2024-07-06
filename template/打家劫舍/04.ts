// 从数组中选出k个数，使得max最小，且下标不能相邻，最后返回这k个数

function minCapability(nums: number[], k: number): number {
    if (k === 1) {
        return Math.min(...nums);
    }
    const len = nums.length;

    // 当窃取能力为x时，最多可以偷多少个房屋
    // 通过二分枚举 capacity，对每个 capacity 进行动态规划，求出在该 capacity 的情况下最多偷到的房屋数，
    // 然后再根据这个房屋数调整 capacity 的查找区间。
    const f = (x) => {
        /**
         * dp[i][0]: 走到第 i 间房且偷窃能力为 capacity 时，不偷第 i 间房，最多能偷的房间数
         * dp[i][1]: 走到第 i 间房且偷窃能力为 capacity 时，偷第 i 间房，最多能偷的房间数
         */

        const dp = new Array(len + 1).fill(0).map(() => new Array(2).fill(0));

        for (let i = 1; i <= len; i++) {
            if (nums[i - 1] <= x) {
                // 这间偷得动
                dp[i][1] = dp[i - 1][0] + 1;
            }

            // 不偷
            dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0]);
        }

        return Math.max(dp[len][0],  dp[len][1]);
    };

    // 开始二分法
    const capacityList = nums.concat();
    capacityList.sort((a, b) => a - b);

    let left = 0;
    let right = capacityList.length - 1;

    // x轴：偷窃能力
    // y轴：最多可偷的房屋数
    // 寻找左边界的二分查找
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);

        const res = f(capacityList[mid]);

        if (res >= k) {
            // 继续向左找
            right = mid;
        } else {
            // 偷太少了，能力提高一些，
            left = mid + 1;
        }
    }

    return capacityList[left];
}
