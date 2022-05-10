function searchRange(nums: number[], target: number): number[] {
    let left = leftBound(nums, target)
    let right = rightBound(nums, target)
    return [left, right]
};


function leftBound(nums: number[], target: number) {
    if (nums.length == 0) return -1
    let left = 0, right = nums.length - 1

    // 搜索区间为[left, right]
    while (left <= right) {  // 注意
        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] < target) {
            // 搜索区间变为[mid +1 , right]
            left = mid + 1
        } else if (nums[mid] > target) {
            // 搜索区间变为[left , mid -1]
            right = mid - 1
        } else if (nums[mid] == target) {
            // 收缩右侧边界
            right = mid - 1
        }
    }

    // 检查出界情况
    if (left >= nums.length || nums[left] != target) {
        return -1
    }
    return left
}

    
function rightBound(nums: number[], target: number) {
    if (nums.length == 0) return -1
    let left = 0, right = nums.length - 1

    // 搜索区间为[left, right]
    while (left <= right) {  // 注意
        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] < target) {
            // 搜索区间变为[mid +1 , right]
            left = mid + 1
        } else if (nums[mid] > target) {
            // 搜索区间变为[left , mid -1]
            right = mid - 1
        } else if (nums[mid] == target) {
            // 收缩左侧边界
            left = mid + 1
        }
    }

    // 检查出界情况 检查right越界的情况
    if (right < 0 || nums[right] != target) {
        return -1
    }
    return right
}
