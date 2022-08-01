function sumRootToLeaf(root: TreeNode | null): number {
    const dfs = (node: TreeNode | null, cur: number): number => {
        return node == null ? 0 : node.left == null && node.right == null ? (cur << 1) + node.val : dfs(node.left, (cur << 1) + node.val) + dfs(node.right, (cur << 1) + node.val)
    }
    return dfs(root, 0)
};

 