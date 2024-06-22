function sumRootToLeaf(root) {
    var dfs = function (node, cur) {
        return node == null ? 0 : node.left == null && node.right == null ? (cur << 1) + node.val : dfs(node.left, (cur << 1) + node.val) + dfs(node.right, (cur << 1) + node.val);
    };
    return dfs(root, 0);
}
;
