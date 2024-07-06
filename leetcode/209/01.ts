// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其总和大于等于 target 的长度最小的
// 子数组
//  [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

function minSubArrayLen(target: number, nums: number[]): number {
    let windowSum = 0;
    const len = nums.length;

    let res = len + 1;

    // 滑动窗口
    let left = 0;
    for (let right = 0; right <= len - 1; right++) {
        windowSum += nums[right];

        // 窗口里的值大于target
        while (windowSum >= target) {
            // 本次满足要求，计算一次结果
            res = Math.min(res, right - left + 1);

            // 尝试收缩左边
            windowSum -= nums[left++];
            // left++;
        }
    }

    return res <= len ? res : 0;
}

var minSubArrayLen01 = function (target, nums) {
    const n = nums.length;
    let ans = n + 1;
    let sum = 0; // 子数组元素和
    let left = 0; // 子数组左端点
    for (let right = 0; right < n; right++) {
        // 枚举子数组右端点
        sum += nums[right];
        while (sum >= target) {
            // 满足要求
            ans = Math.min(ans, right - left + 1);
            sum -= nums[left++]; // 左端点右移
        }
    }
    return ans <= n ? ans : 0;
};

const target = 7;
const nums = [2, 3, 1, 2, 4, 3];

const res = minSubArrayLen(target, nums);
console.log('res: ', res);
