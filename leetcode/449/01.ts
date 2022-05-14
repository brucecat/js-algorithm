class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

// 前续遍历 序列化
function serialize(root: TreeNode | null): string {
    if (root == null) return ""

    let res = []
    function preOrder(root: TreeNode | null): void {
        if (root == null) {
            return
        }
        res.push(root.val)
        preOrder(root.left)
        preOrder(root.right)
    }

    preOrder(root)

    return res.join(",")
};


function deserialize(data: string): TreeNode | null {
    if (data.length < 1) return null;
    if (data.length == 1) return new TreeNode(parseInt(data[0]));
    
    // 转化成前序遍历结果
    let preOrder = data.split(",").map(item => parseInt(item));
    
    // console.log(preOrder)
    return helper(preOrder, Number.MIN_VALUE, Number.MAX_VALUE);
};


// 定义：将 nodes 中值在闭区间 [min, max] 的节点构造成一棵 BST
function helper(nodes: number[], min: number, max: number): TreeNode | null {
    if (min > max || nodes.length < 1) {
        return null
    }

    // 前序遍历位置进行反序列化
    // 前序遍历结果第一个节点是根节点
    let rootVal: number = nodes[0]

    if (rootVal > max || rootVal < min) {
        // 超过闭区间 [min, max]，则返回空指针
        return null;
    }

    // 删除第一个节点
    nodes.shift()

    // 生成 root 节点
    let root = new TreeNode(rootVal)
    // 当前的根节点

    // 构建左右子树
    // BST 左子树都比根节点小，右子树都比根节点大
    root.left = helper(nodes, min, rootVal);
    root.right = helper(nodes, rootVal, max);

    return root
}









