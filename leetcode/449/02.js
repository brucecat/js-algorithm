/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    var ans = new Array();
    var dfs = function (node) {
        if (node != null) {
            dfs(node.left);
            dfs(node.right);
            ans.push(node.val);
        }
    };
    dfs(root);
    return ans.join(",");
};
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data == "") {
        return null;
    }
    var vals = data.split(",").map(function (i) { return parseInt(i); });
    var dfs = function (left, right) {
        var len = vals.length;
        if (len == 0 || vals[len - 1] < left || vals[len - 1] > right)
            return null;
        var val = vals.pop();
        var node = new TreeNode(val);
        node.right = dfs(val, right);
        node.left = dfs(left, val);
        return node;
    };
    return dfs(-1, 10007);
};
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
