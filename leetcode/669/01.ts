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

function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
    if (root === null) return null;

    // 如果一个节点没有在[low, high]范围内
    // 情况1：该节点小于 low , 其本身和左子树一律减掉
    // 情况2：该节点大于 high，其本身和右子树一律减掉

    if (root.val < low) {
        // 直接返回 root.right
        root.right = trimBST(root.right, low, high);
    } else if (root.val > high) {
        // 直接返回 root.left
        // 等于删除 root 以及 root 的右子树
        return trimBST(root.left, low, high);
    } else {
        // 闭区间内的
        root.right = trimBST(root.right, low, high);
        root.left = trimBST(root.left, low, high);
    }

    return root;
}
