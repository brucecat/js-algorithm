// 定义：将以 root 为根的树拉平为链表
function flatten(root: TreeNode | null): void {
    if (root === null) return;

    // 先拉平左右子树
    flatten(root.left);
    flatten(root.right);

    let leftRoot = root.left;
    let rightRoot = root.right;

    root.left = null;
    root.right = leftRoot;

    // 3、将原先的右子树接到当前右子树的末端
    let p = root;
    while (p.right !== null) {
        p = p.right;
    }

    p.right = rightRoot;
}
