var NumMatrix = /** @class */ (function () {
    function NumMatrix(matrix) {
        // m行 n列
        var m = matrix.length;
        var n = matrix[0].length;
        if (m == 0 && n == 0) {
            return;
        }
        // preSum[i][j] 记  matrix 中⼦矩阵 [0, 0, i-1, j-1] 的元素和
        this.preSum = new Array(m + 1);
        for (var i = 0; i < m + 1; i++) {
            this.preSum[i] = new Array(n + 1).fill(0);
        }
        // 计算每个矩阵[0,0, i ,j]的元素和
        for (var i = 1; i <= m; i++) {
            for (var j = 1; j <= n; j++) {
                // 在图上画一画就清晰了
                // [0, 0, i ,j]的元素和 = pre[i-1][j-1] = [0, 0, i-1 ,j] + [0,0, i ,j -1] - [0,0, i-1 ,j]与[0,0, i ,j -1]重叠的部分 + [i, j]所在的点
                this.preSum[i][j] = this.preSum[i - 1][j] + this.preSum[i][j - 1] - this.preSum[i - 1][j - 1] + matrix[i - 1][j - 1];
            }
        }
    }
    NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
        return this.preSum[row2 + 1][col2 + 1] - this.preSum[row1][col2 + 1] - this.preSum[row2 + 1][col1] + this.preSum[row1][col1];
    };
    return NumMatrix;
}());
/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
//  ["NumMatrix","sumRegion","sumRegion","sumRegion"]
//  [[],[2,1,4,3],[1,1,2,2],[1,2,2,4]]
var obj = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
var param_1 = obj.sumRegion(2, 1, 4, 3);
console.log(obj.preSum);
console.log(param_1);
