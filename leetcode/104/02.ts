function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0;

    let res = 0;
    let depth = 0;

    const visit = (root) => {
        if (root === null) {
            // 到达子结点，更新最大深度
            res = Math.max(res, depth);
            return;
        }

        depth++;
        visit(root.left);
        visit(root.right);
        depth--;
    };

    visit(root);

    return res;
}
