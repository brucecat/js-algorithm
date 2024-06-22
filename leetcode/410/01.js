// 运输能力为x时，在f(x)天能将货物weights运输完
function f(weights, x) {
    var days = 0;
    for (var i = 0; i < weights.length;) {
        // 尽可能多装货物
        var cap = x;
        while (i < weights.length) {
            if (cap < weights[i]) {
                break;
            }
            else {
                cap -= weights[i];
            }
            i++;
        }
        days++;
    }
    return days;
}
// 主函数，在f(x) == target 的约束下，求x的最小值 f(x)单调递减
function shipWithinDays(weights, days) {
    var left = Math.max.apply(Math, weights);
    var right = weights.reduce(function (sum, curr) {
        return sum + curr;
    }, 1);
    while (left < right) {
        var mid = left + Math.floor((right - left) / 2);
        var tmp = f(weights, mid);
        if (tmp == days) {
            // 求左边界, 收缩右侧边界
            right = mid;
        }
        else if (tmp < days) {
            // 怎么让f(x)更大一点？ x变小
            right = mid;
        }
        else if (tmp > days) {
            // 怎么让f(x)更小一点？x变大
            left = mid + 1;
        }
    }
    return left;
}
;
function splitArray(nums, m) {
    return shipWithinDays(nums, m);
}
;
