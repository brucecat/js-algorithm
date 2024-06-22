var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
// 前续遍历 序列化
function serialize(root) {
    if (root == null)
        return "";
    var res = [];
    function preOrder(root) {
        if (root == null) {
            return;
        }
        res.push(root.val);
        preOrder(root.left);
        preOrder(root.right);
    }
    preOrder(root);
    return res.join(",");
}
;
function deserialize(data) {
    if (data.length < 1)
        return null;
    if (data.length == 1)
        return new TreeNode(parseInt(data[0]));
    // 转化成前序遍历结果
    var preOrder = data.split(",").map(function (item) { return parseInt(item); });
    // console.log(preOrder)
    return helper(preOrder, Number.MIN_VALUE, Number.MAX_VALUE);
}
;
// 定义：将 nodes 中值在闭区间 [min, max] 的节点构造成一棵 BST
function helper(nodes, min, max) {
    if (min > max || nodes.length < 1) {
        return null;
    }
    // 前序遍历位置进行反序列化
    // 前序遍历结果第一个节点是根节点
    var rootVal = nodes[0];
    if (rootVal > max || rootVal < min) {
        // 超过闭区间 [min, max]，则返回空指针
        return null;
    }
    // 删除第一个节点
    nodes.shift();
    // 生成 root 节点
    var root = new TreeNode(rootVal);
    // 当前的根节点
    // 构建左右子树
    // BST 左子树都比根节点小，右子树都比根节点大
    root.left = helper(nodes, min, rootVal);
    root.right = helper(nodes, rootVal, max);
    return root;
}
