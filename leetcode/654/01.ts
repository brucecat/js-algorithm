function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    // 定义：将 nums[left..right] 构造成符合条件的树，返回根节点
    const build = function (left, right) {
        // base case
        if (left > right) {
            return null;
        }

        if (left === right) {
            return new TreeNode(nums[left]);
        }

        // 找到数组中的最大值和对应的索引
        let maxIndex = -1,
            maxVal = -Infinity;
        for (let i = left; i <= right; i++) {
            if (maxVal < nums[i]) {
                maxIndex = i;
                maxVal = nums[i];
            }
        }

        let root = new TreeNode(maxVal);

        // 递归调用
        root.left = build(left, maxIndex - 1);
        root.right = build(maxIndex + 1, right);

        return root
    };

    const res = build(0, nums.length - 1);
    return res;
}
