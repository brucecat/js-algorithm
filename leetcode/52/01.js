function solveNQueens(n) {
    var board = new Array(n);
    // '.' 表示空，'Q' 表示皇后，初始化空棋盘。
    for (var i = 0; i < n; i++) { // 棋盘的初始化
        board[i] = new Array(n).fill('.');
    }
    var res = [];
    // 验证是否是有效的位置
    var isValid = function (row, col) {
        for (var i = 0; i < row; i++) { // 之前的行
            for (var j = 0; j < n; j++) { // 所有的列
                if (board[i][j] === 'Q' && // 发现了皇后，并且和自己同列/对角线
                    (j === col || i + j === row + col || i - j === row - col)) {
                    return false; // 不是合法的选择
                }
            }
        }
        return true;
    };
    // 路径：board 中小于 row 的那些行都已经成功放置了皇后
    // 选择列表：第 row 行的所有列都是放置皇后的选择
    // 结束条件：row 超过 board 的最后一行
    var backtrack = function (row) {
        // 触发结束条件
        if (row === n) {
            var stringsBoard = board.slice(); // 拷贝一份board
            for (var i = 0; i < n; i++) {
                stringsBoard[i] = stringsBoard[i].join(''); // 将每一行拼成字符串
            }
            res.push(stringsBoard); // 推入res数组
            return;
        }
        for (var col = 0; col < n; col++) {
            // 排除不合法选择
            if (!isValid(row, col))
                continue;
            // 做选择
            board[row][col] = 'Q';
            // 进入下一行决策
            backtrack(row + 1);
            // 撤销选择
            board[row][col] = '.';
        }
    };
    backtrack(0);
    return res;
}
;
function totalNQueens(n) {
    return solveNQueens(n).length;
}
;
