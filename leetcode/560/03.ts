// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
// 子数组是数组中元素的连续非空序列。

function subarraySum(nums: number[], k: number): number {
    let res = 0;

    // 前缀和到该前缀和出现次数的映射
    const prefixToTimesMap = new Map();
    prefixToTimesMap.set(0, 1);
    // 前缀和
    const prefixArray = new Array(nums.length).fill(0);
    for (let i = 0; i < nums.length; i++) {
        prefixArray[i] = i === 0 ? nums[i] : prefixArray[i - 1] + nums[i];

        if (!prefixToTimesMap.has(prefixArray[i])) {
            prefixToTimesMap.set(prefixArray[i], 0);
        }
        prefixToTimesMap.set(prefixArray[i], prefixToTimesMap.get(prefixArray[i]) + 1);
    }

    for (let i = 0; i < nums.length; i++) {
        // 如果之前存在值为 need 的前缀和
        // 说明存在以 nums[i-1] 结尾的子数组的和为 k
        const need = prefixArray[i] - k;
        if (prefixToTimesMap.has(need)) {
            res += prefixToTimesMap.get(need);
        }
    }


    return res;
}

const a1 = [1, 2, 3];
const k1 = 3;

const res = subarraySum(a1, k1);
console.log('res: ', res);
