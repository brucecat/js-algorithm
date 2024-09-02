const getResult = (postOrder, inOrder) => {
    const tree = getTree(postOrder, inOrder);
    const res = travelByLayer(tree);
    return res;
};

const getTree = (postOrder, inOrder) => {
    // 记录中序索引
    const indexMap = new Map();
    for (let i = 0; i < inOrder.length; i++) {
        indexMap.set(inOrder[i], i);
    }

    // 根据 中序[inStart, inEnd]    后序[postStart, postEnd] 区间 构建二叉树
    const build = (inStart, inEnd, postStart, postEnd) => {
        if (inStart > inEnd) {
            return null;
        }

        if (postStart === postEnd) {
            return new TreeNode(postOrder[postStart]);
        }

        const rootVal = postOrder[postEnd];
        const root = new TreeNode(rootVal);
        const rootIndex = indexMap.get(rootVal);

        const rightSize = inEnd - rootIndex;
        const leftSize = rootIndex - inStart;

        // 右子树
        const rightInStart = rootIndex + 1;
        const rightInEnd = inEnd;

        const rightPostStart = postEnd - rightSize;
        const rightPostEnd = postEnd - 1;

        // 左子树
        const leftInStart = inStart;
        const leftInEnd = rootIndex - 1;
        const leftPostStart = postStart;
        const leftPostEnd = rightPostStart - 1;

        root.left = build(leftInStart, leftInEnd, leftPostStart, leftPostEnd);
        root.right = build(rightInStart, rightInEnd, rightPostStart, rightPostEnd);
        return root;
    };

    return build(0, postOrder.lenght - 1, 0, inOrder.lenght - 1);
};

// 层序遍历一颗树
const travelByLayer = (root) => {
    const queue = [];
    let res = '';
    while (queue.length) {
        const cur = queue.shift();
        res = `${res} ${cur.val}`;

        cur.left && queue.push(cur.left);
        cur.right && queue.push(cur.right);
    }
    return res;
};

const a = 'CBEFDA';
const b = 'CBAEDF';
