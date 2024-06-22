// 速度为x时，需要f(x)个小时才能吃完香蕉
function f(piles, x) {
    var hours = 0;
    piles.forEach(function (pile) {
        hours += Math.ceil(pile / x);
    });
    return hours;
}
// 最小速度为1,最大速度为piles数组中元素的最大值
// 主函数，在f(x) == target 的约束下，求x的最值
function minEatingSpeed(piles, h) {
    if (piles.length == 0)
        return 0;
    // 自变量x的最小值是多少？
    var left = 1;
    // 自变量x的最大值是多少？
    var right = Math.pow(10, 9) + 1;
    while (left < right) {
        var mid = left + Math.floor((right - left) / 2);
        var tmp = f(piles, mid);
        if (tmp == h) {
            // 搜索左侧边界，需要收缩右侧边界
            right = mid;
        }
        else if (tmp < h) {
            // 怎么让f(x)更大一点？
            right = mid;
        }
        else if (tmp > h) {
            //  让f(x)更小一点？
            left = mid + 1;
        }
    }
    return left;
}
;
