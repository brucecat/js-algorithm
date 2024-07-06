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

// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明：叶子节点是指没有子节点的节点。

// BFS
function minDepth(root: TreeNode | null): number {
    if (root == null) return 0;

    // 维护一个队列
    let depth = 1;
    const queue = [root];

    while (queue.length) {
        let size = queue.length;

        // 左右节点进入队列
        for (let i = 0; i <= size - 1; i++) {
            let cur = queue.shift();

            if(!cur.left && !cur.right){
                return depth;
            }

            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }

        // 每层遍历完，深度+1
        depth++;
    }

    return depth
}
