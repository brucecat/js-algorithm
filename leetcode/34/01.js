function searchRange(nums, target) {
    var left = leftBound(nums, target);
    var right = rightBound(nums, target);
    return [left, right];
}
;
function leftBound(nums, target) {
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
function rightBound(nums, target) {
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
