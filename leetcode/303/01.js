var NumArray = /** @class */ (function () {
    function NumArray(nums) {
        // 用一个数组记录前缀和 
        //  preSumArray[0] = 0，便于计算累加和
        // preSumArray[i+1]：num的[0, i]的区间和
        var preSumArray = new Array(nums.length + 1);
        preSumArray[0] = 0;
        // 存放前缀和
        for (var i = 1; i < preSumArray.length; i++) {
            preSumArray[i] = preSumArray[i - 1] + nums[i - 1];
        }
        this.preSumArray = preSumArray;
    }
    /* 查询闭区间 [left, right] 的累加和 */
    NumArray.prototype.sumRange = function (left, right) {
        // 即求num的[0, right]的区间和 - num的[0, left-1]的区间和
        return this.preSumArray[right + 1] - this.preSumArray[left];
    };
    return NumArray;
}());
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
