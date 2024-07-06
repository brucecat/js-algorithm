// LeetCode 366. 寻找二叉树的叶子节点（上下翻转二叉树+BFS）
// 给你一棵二叉树，请按以下要求的顺序收集它的全部节点：

// 依次从左到右，每次收集并删除所有的叶子节点
// 重复如上过程直到整棵树为空

const getResult = (root) => {
    // 按照树的高度来分组
    const heightMap = {};

    const maxDepth = (root) => {
        if (root === null) return 0;
        const leftMaxDepth = maxDepth(root.left);
        const rightMaxDepth = maxDepth(root.right);

        const res = Math.max(leftMaxDepth, rightMaxDepth) + 1;

        if(!heightMap[res]){
            heightMap[res] = [];
        }

        heightMap[res].push(root.val)
    };


    maxDepth(root);

    let res = []
    Object.keys(heightMap).sort((a, b) => Number(a) - Number(b)).forEach(height=>{
      res.push(heightMap[height])
    })

    return res
};
