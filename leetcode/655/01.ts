
// 树的高度
let height: number;

function getHeight(root: TreeNode | null, depth: number): void {
    if (root == null) return;
    height = Math.max(height, depth);
    getHeight(root.left, depth + 1);
    getHeight(root.right, depth + 1);
}

function printTree(root: TreeNode | null): string[][] {
    height = 0;
    getHeight(root, 0);

    // 矩阵的行数 m  height + 1
    const m = height + 1;

    // 矩阵的列数 n pow(2, height+1) - 1
    const n = (1 << (height + 1)) - 1;

    // 初始化数组
    const res: string[][] = [];
    for (let i = 0; i < m; i++) {
        res[i] = new Array<string>(n).fill('');
    }

    // dfs填充数组
    const dfs = (root: TreeNode | null, x: number, y: number) => {
        if (!root) {
            return;
        }

        res[x][y] = root.val + '';

        dfs(root.left, x + 1, y - (1 << (height - x - 1)));
        dfs(root.right, x + 1, y + (1 << (height - x - 1)));
    };

    dfs(root, 0, Math.floor((n - 1) / 2));

    return res;
}
