
// 回溯，以数字的视角
import java.util.HashMap;

class Solution {

    HashMap<Integer, Boolean> memo = new HashMap<>(); // 备忘录，记录 nums 中数字的使用情况

    public boolean canPartitionKSubsets(int[] nums, int k) {
        // 边界条件
        if (k > nums.length)
            return false;
        int sum = 0;
        for (int x : nums)
            sum += x;
        if (sum % k != 0)
            return false;

        // 使用位图的技巧记录数组中元素的使用情况，对于每个子集（桶）我们都需要遍历全部的数组元素
        int used = 0;
        int target = sum / k; // 理论上每个桶应该装的数字之和

        // DFS k号桶初始没有放任何元素，从 nums[0] 开始做选择
        return backtrack(k, 0, nums, 0, used, target);
    }

    // DFS 递归穷举 nums 中每个数字
    public boolean backtrack(int k, int bucketSum, int[] nums, int start, int used, int target) {
        // base case
        if (k == 0) {
            // 所有的桶都被装满了，且 nums 一定被使用完了
            return true;
        }

        if (bucketSum == target) {
            // 当前桶装满了，进行下一个子集的穷举，从 nums[0] 开始做选择
            boolean res = backtrack(k - 1, 0, nums, 0, used, target);
            // 将当前状态和结果存入备忘录
            memo.put(used, res);
        }
        // 如果当前状态曾经计算过，直接返回结果，不再穷举递归
        if (memo.containsKey(used)) {
            return memo.get(used);
        }

        // 从 start 开始向后遍历，将有效的 nums[i] 装入当前的子集（桶）
        for (int i = start; i < nums.length; i++) {
            // 剪枝，nums[i] 已经装入别的子集中 判断第 i 位是否为1
            if (((used >> i) & 1) == 1)
                continue;
            // 剪枝，当前桶装不下 nums[i]
            if (bucketSum + nums[i] > target) {
                continue;
            }
            // 做选择，将 nums[i] 装入当前的桶中
            used |= 1 << i; // 将第 i 位为1
            bucketSum += nums[i];
            // 递归下一个数字是否放入该桶中
            if (backtrack(k, bucketSum, nums, i + 1, used, target)) {
                return true;
            }
            // 撤销选择
            used ^= 1 << i; // 使用异或运算将第 i 位恢复 0
            bucketSum -= nums[i];
        }
        // nums[index] 装入哪个桶都不行
        return false;
    }
}
