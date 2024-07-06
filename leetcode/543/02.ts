// 每个节点的直径：左子树的最大深度 + 右子树的最大深度
function diameterOfBinaryTree(root: TreeNode | null): number {
  let res = 0;

  // 获取该root的最大深度
  const maxDepth = (curRoot: TreeNode | null): number => {
      if (curRoot === null) return 0;

      const leftMaxDepth = maxDepth(curRoot.left);
      const rightMaxDepth = maxDepth(curRoot.right);

      // 后序位置，顺便计算最大直径
      let myDiameter = leftMaxDepth + rightMaxDepth;

      res = Math.max(res, myDiameter);

      return Math.max(leftMaxDepth, rightMaxDepth) + 1;
  };

  maxDepth(root);

  return res;
}
