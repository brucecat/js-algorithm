function rob(root: TreeNode | null): number {

    const res = dp(root);

    return Math.max(res[0], res[1]);
}

// [偷，不偷]
const dp = function (root){
  if(root == null){
      return [0,0];
  }

  let left = dp(root.left);
  let right = dp(root.right);

  // 抢，下家就不能抢了
  let rob = root.val + left[0] + right[0];

  // 不抢，下家可抢可不抢，取决于收益大小
  let not_rob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

  return [not_rob, rob]
}