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
function minDepth(root) {
    if (root == null)
        return 0;
    var q = [];
    q.push(root);
    // root 本身就是一层，depth 初始化为 1
    var depth = 1;
    while (q.length !== 0) {
        var sz = q.length;
        /* 遍历当前层的节点 */
        for (var i = 0; i < sz; i++) {
            var cur = q.shift();
            /* 判断是否到达叶子结点 */
            if (cur.left == null && cur.right == null)
                return depth;
            /* 将下一层节点加入队列 */
            if (cur.left != null)
                q.push(cur.left);
            if (cur.right != null)
                q.push(cur.right);
        }
        /* 这里增加步数 */
        depth++;
    }
    return depth;
}
;
