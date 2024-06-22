function binarySearch(nums, target) {
    var left = 0, right = nums.length - 1;
    while (left <= right) {
        var mid = left + Math.floor((right - left) / 2);
        if (nums[mid] == target) {
            return mid;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        else if (nums[mid] > target) {
            right = mid - 1;
        }
    }
    return -1;
}
function leftBound(nums, target) {
    if (nums.length == 0)
        return -1;
    var left = 0, right = nums.length; // 注意
    while (left < right) { // 注意
        var mid = left + Math.floor((right - left) / 2);
        if (nums[mid] == target) {
            right = mid;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        else if (nums[mid] > target) {
            right = mid; // 注意
        }
    }
    return -1;
}
function leftBound01(nums, target) {
    if (nums.length == 0)
        return -1;
    var left = 0, right = nums.length - 1;
    // 搜索区间为[left, right]
    while (left <= right) { // 注意
        var mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < target) {
            // 搜索区间变为[mid +1 , right]
            left = mid + 1;
        }
        else if (nums[mid] > target) {
            // 搜索区间变为[left , mid -1]
            right = mid - 1;
        }
        else if (nums[mid] == target) {
            // 收缩右侧边界
            right = mid - 1;
        }
    }
    // 检查出界情况
    if (left >= nums.length || nums[left] != target) {
        return -1;
    }
    return left;
}
function rightBound01(nums, target) {
    if (nums.length == 0)
        return -1;
    var left = 0, right = nums.length;
    while (left < right) {
        var mid = left + Math.floor((right - left) / 2);
        if (nums[mid] == target) {
            left = mid + 1; // 注意
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        else if (nums[mid] > target) {
            right = mid;
        }
    }
    return right - 1; // 注意
}
function rightBound02(nums, target) {
    if (nums.length == 0)
        return -1;
    var left = 0, right = nums.length - 1;
    // 搜索区间为[left, right]
    while (left <= right) { // 注意
        var mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < target) {
            // 搜索区间变为[mid +1 , right]
            left = mid + 1;
        }
        else if (nums[mid] > target) {
            // 搜索区间变为[left , mid -1]
            right = mid - 1;
        }
        else if (nums[mid] == target) {
            // 收缩左侧边界
            left = mid + 1;
        }
    }
    // 检查出界情况 检查right越界的情况
    if (right < 0 || nums[right] != target) {
        return -1;
    }
    return right;
}
// 函数f是关于自变量x的单调函数
function f(x) {
    // 
    return x;
}
// 主函数，在f(x) == target 的约束下，求x的最小值
function solution(nums, target) {
    if (nums.length == 0)
        return -1;
    // 问自己：自变量x的最小值是多少？
    var left = 0;
    // 问自己 自变量x的最大值是多少？
    var right = nums.length + 1;
    while (left < right) {
        var mid = left + Math.floor((right - left) / 2);
        if (f(mid) == target) {
            // 问自己： 题目是求左边界还是右边界？
            // ...
        }
        else if (f(mid) < target) {
            // 问自己：怎么让f(x)更大一点？
            // ...
        }
        else if (f(mid) > target) {
            // 问自己：怎么让f(x)更小一点？
            // ...
        }
    }
    return left;
}
