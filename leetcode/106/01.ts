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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    // 记住每个值对应的中序序列index
    const indexMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        indexMap.set(inorder[i], i);
    }

    // 根据 中序[inStart, inEnd]    后序[postStart, postEnd] 区间 构建二叉树
    const build = (inStart, inEnd, postStart, postEnd) => {
        if (inStart > inEnd) {
            return null;
        }

        if (postStart === postEnd) {
            return new TreeNode(postorder[postStart]);
        }

        const rootVal = postorder[postEnd];

        // 获取根节点
        const root = new TreeNode(rootVal);
        const rootIndex = indexMap.get(rootVal);

        // 切割出右子树的中序序列
        const rightInStart = rootIndex + 1;
        const rightInEnd = inEnd;

        // 右子树序列长度
        const rightSize = rightInEnd - rightInStart + 1;

        // 左子树的中序序列
        const leftInStart = inStart;
        const leftInEnd = rootIndex - 1;

        // 左 右 根
        // 切割出右子树的后序序列
        const rightPostStart = postEnd - rightSize;
        const rightPostEnd = postEnd - 1;

        // 切割出左子树的后序序列
        const leftPostStart = postStart;
        const leftPostEnd = rightPostStart - 1;

        root.left = build(leftInStart, leftInEnd, leftPostStart, leftPostEnd);
        root.right = build(rightInStart, rightInEnd, rightPostStart, rightPostEnd);
        return root;
    };

    const root = build(0, inorder.length - 1, 0, postorder.length - 1);
    return root;
}
