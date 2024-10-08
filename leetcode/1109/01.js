var Difference = /** @class */ (function () {
    function Difference(nums) {
        var len = nums.length;
        if (len === 0) {
            return;
        }
        // 输入一个初始数组，区间操作将在这个数组上进行
        this.diff = new Array(len);
        // 据初始数组 差分数组
        this.diff[0] = nums[0];
        for (var i = 1; i < nums.length; i++) {
            this.diff[i] = nums[i] - nums[i - 1];
        }
        console.log(this.diff);
    }
    // 给闭区间[i, j]增加val（可以是负数）
    Difference.prototype.increment = function (i, j, val) {
        this.diff[i] += val;
        if (j + 1 < this.diff.length) {
            this.diff[j + 1] -= val;
        }
    };
    // 返回结果数组
    // this.diff[i] = res[i] - res[i-1]
    Difference.prototype.result = function () {
        // 根据diff数组计算返回nums数组
        var len = this.diff.length;
        var res = new Array(len);
        res[0] = this.diff[0];
        for (var i = 1; i < len; i++) {
            res[i] = res[i - 1] + this.diff[i];
        }
        console.log(res);
        return res;
    };
    return Difference;
}());
function corpFlightBookings(bookings, n) {
    var res = new Difference(new Array(n).fill(0));
    // 对res进行计算
    bookings.forEach(function (booking) {
        // 索引记得要减掉1
        var i = booking[0] - 1;
        var j = booking[1] - 1;
        var val = booking[2];
        res.increment(i, j, val);
    });
    return res.result();
}
;
