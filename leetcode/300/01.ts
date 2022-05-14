function lengthOfLIS(nums: number[]): number {
    // dp[i] 表示以 nums[i] 这个数结尾的最长递增子序列的长度
    // base case：dp 数组全都初始化为 1
    let dp = new Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j])
                dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }

    return Math.max(...dp)
};


function lengthOfLIS01(nums: number[]): number {
    let top = new Array(nums.length);

    // 牌堆数初始化为 0
    let piles = 0;

    for (let i = 0; i < nums.length; i++) {
        // 要处理的扑克牌
        let poker = nums[i];

        /***** 搜索左侧边界的二分查找 *****/
        let left = 0, right = piles;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (top[mid] > poker) {
                right = mid;
            } else if (top[mid] < poker) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        /*********************************/

        // 没找到合适的牌堆，新建一堆
        if (left === piles) piles++;

        // 把这张牌放到牌堆顶
        top[left] = poker;
    }

    // 牌堆数就是 LIS 长度
    return piles;
};