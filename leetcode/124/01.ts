/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxPathSum(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    let res = Number.MIN_SAFE_INTEGER;

    const helper = (curRoot) => {
        if (curRoot === null) return 0;

        // 可以选择不走，那就是取0
        const rightMaxSum = Math.max(0, helper(curRoot.right));

        const leftMaxSum = Math.max(0, helper(curRoot.left));

        // 经过当前节点的最大路径和
        const curSum = rightMaxSum + leftMaxSum + curRoot.val;

        res = Math.max(curSum, res);

        // 实现函数定义，左右子树的最大单边路径和加上根节点的值
        // 就是从根节点 root 为起点的最大单边路径和
        return Math.max(leftMaxSum, rightMaxSum) + curRoot.val;
    };

    helper(root);

    return res;
}
