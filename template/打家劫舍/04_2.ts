class Solution {
  capacity = [];

  minCapability(nums, k) {
      this.capacity = nums.slice(); // 创建nums的副本
      this.capacity.sort((a, b) => a - b); // 排序
      let left = 0;
      let right = this.capacity.length - 1;

      // 二分查找区间左端点
      while (left < right) {
          let mid = Math.floor((left + right) / 2);
          if (this.check(nums, this.capacity[mid]) >= k) {
              right = mid;
          } else {
              left = mid + 1;
          }
      }
      return this.capacity[left];
  }

  // 动态规划检查函数
  check(nums, capacity) {
      let n = nums.length;
      let dp = Array.from({ length: n + 1 }, () => new Array(2).fill(0));

      for (let i = 1; i <= n; i++) {
          if (nums[i - 1] <= capacity) {
              dp[i][1] = dp[i - 1][0] + 1;
          }
          dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0]);
      }
      return Math.max(dp[n][1], dp[n][0]);
  }
}

function minCapability(nums: number[], k: number): number {
  const s = new Solution();
  const res = s.minCapability(nums, k);
  return res;
}
