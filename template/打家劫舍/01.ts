// LCR 089. 打家劫舍
// function rob(nums: number[]): number {
//     // 选择奇数位
//     let res1 = 0;
//     for (let i = 0; i <= nums.length - 1; i += 2) {
//         res1 += nums[i];
//     }

//     // 选择偶数位
//     let res2 = 0;
//     for (let i = 1; i <= nums.length - 1; i += 2) {
//         res2 += nums[i];
//     }

//     console.log(res1);
//     console.log(res2);

//     return Math.max(res1, res2);
// }
// const nums = [1, 2, 3, 1];
// const res = rob(nums);
// console.log('res: ', res);



function rob(nums: number[]): number {
  const len = nums.length;

  const dp = new Array(len).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i <= len - 1; i++) {
      // 偷这间房
      const f1 = dp[i - 2] + nums[i];

      // 不偷这间房
      const f2 = dp[i - 1];

      dp[i] = Math.max(f1, f2);
  }

  return dp[len - 1];
}

const nums = [1, 2, 3, 1];
const res = rob(nums);
console.log('res: ', res);
