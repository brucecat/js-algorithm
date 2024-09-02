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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    // 存储 inorder 中值到索引的映射
    let valToIndex = new Map();
    for (let i = 0; i < inorder.length; i++) {
        valToIndex.set(inorder[i], i);
    }

    const build = (preStart, preEnd, inStart, inEnd) => {
        if (preStart > preEnd) {
            return null;
        }

        // root节点对应的值就是前序遍历数组的第一个元素
        let rootVal = preorder[preStart];

        // rootVal 在中序遍历数组中的索引
        let index = valToIndex.get(rootVal);

        // 左子树序列长度
        let leftSize = index - inStart;

        // 构造出当前节点
        let root = new TreeNode(rootVal);

        let leftRoot = build(preStart + 1, preStart + leftSize, inStart, index - 1);

        let rightRoot = build(preStart + leftSize + 1, preEnd, index + 1, inEnd);

        root.left = leftRoot;
        root.right = rightRoot;
        return root;
    };

    const res = build(0, preorder.length - 1, 0, inorder.length - 1);
    return res
}

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
