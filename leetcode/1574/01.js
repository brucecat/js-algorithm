// 最长递增序列
// 方法一：双指针 + 二分查找【通过】
// 这道题要求删除一段子区间，我们分下面几种情况：
// ① 删除左边一段，右边一段单调有序；
// ② 删除中间中间一段，左右两段拼接起来单调有序；
// ③ 删除右边一段，左边一段单调有序。
// 如果设长度为 0 也能是一段，归纳为情况 ② 删除中间中间一段，左右两段拼接起来单调有序；
// 我们设 arr  可以被分为 left 、 mid  、right  三段，分割点为 i ，j ：
// 左边段 left  为 [0,i) ；
// 中间段 mid 为 [i,right)；
// 右边段 right 为 [right,n)。
// 首先要满足，左右均为单调非递减，遍历找出分割点为 i ，j；
// 然后就是搜索区间问题，固定一个端点，二分查找另一个端点。
// 然后遍历左边段 left 中每个元素 target，去右边段 right 找第一个 \ge target≥target 的元素下标：
// 这里进行蓝红区域划分：
// 左边蓝色区域为 <target 的区域；
// 右边红色区域为  ≥target 的区域。
function findLengthOfShortestSubarray(arr) {
    var n = arr.length;
    var i = 1, j = n - 1;
    while (i < n && arr[i - 1] <= arr[i])
        ++i;
    while (j - 1 >= 0 && arr[j - 1] <= arr[j])
        --j;
    if (i > j)
        return 0; // arr已经有序
    var left = j - 1, right = n - 1;
    var ans = j; // 最坏结果只保留right
    for (var k = 0; k < i; k++) {
        var target = arr[k];
        // 搜索right区间[j,n-1]
        left = j - 1;
        right = n;
        while (left + 1 < right) {
            var mid = Math.floor((left + right) / 2);
            if (arr[mid] < target) {
                left = mid;
            }
            else {
                right = mid;
            }
        }
        ans = Math.min(ans, right - k - 1);
    }
    return ans;
}
;
function findLengthOfShortestSubarray01(arr) {
    var len = arr.length;
    // leftEnd作为左边区域 结束位置的指针,rightStart作为右边区域 起始位置的指针
    var leftEnd = 0, rightStart = len - 1;
    // 计算左边区域 能到的最右的位置
    for (; leftEnd < len - 1; leftEnd++) {
        if (arr[leftEnd] > arr[leftEnd + 1])
            break;
    }
    // 如果最右的位置超过了数组空间，说明整个数组都是递增的，不用删除子数组
    if (leftEnd == len - 1)
        return 0;
    // 计算右边区域 能到的最左边的位置
    for (; rightStart > 1; rightStart--) {
        if (arr[rightStart] < arr[rightStart - 1])
            break;
    }
    // 既然leftEnd和rightStart两处位置符合递增的大小关系，那也就是说 左边全部 + 右边全部 是递增的，
    // 那自然也是最长的，所以要删除的也是最短的。例子：{1，4，6，2，3，7，6，7，8，9}
    if (arr[leftEnd] <= arr[rightStart])
        return rightStart - leftEnd - 1;
    // 执行到这一步，说明上面的情况都不符合，需要从三个区域中找删除最短的情况
    // 保留当前删除子数组最短的情况，和后面计算里，综合取最短！当前已知能删除的情况有：
    //    ① 保留左边区域， 删除之后的子数组
    //    ② 保留右边区域， 删除之前的子数组       二者取最短的
    var deleteMinLen = Math.min(len - leftEnd - 1, rightStart);
    // 然后计算 左边部分+右边部分 的情况。
    // 到这里因为已经排除了：左边全部 + 右边全部的情况，例子：{1,3,5,8,2,3,5,3,4,5,6,7,8,9}
    // 所以我们现在取最大化的结果，最少删除 左边和右边的长度
    // 最干脆的方式就是从左边区域的第一个起，
    // 找每一个元素（下标i）在右边区域第一个大于等于他的元素（下标j）
    // 取 j - i - 1最小的情况！
    for (var i = 0; i <= leftEnd; i++) {
        for (var j = rightStart; j < len; j++) {
            if (arr[i] <= arr[j]) { // 第一个大于等于
                deleteMinLen = Math.min(deleteMinLen, j - i - 1);
                break;
            }
        }
    }
    return deleteMinLen;
}
;
function findLengthOfShortestSubarray02(arr) {
    var len = arr.length;
    // leftEnd作为左边区域 结束位置的指针,rightStart作为右边区域 起始位置的指针
    var leftEnd = 0, rightStart = len - 1;
    // 计算左边区域 能到的最右的位置
    for (; leftEnd < len - 1; leftEnd++) {
        if (arr[leftEnd] > arr[leftEnd + 1])
            break;
    }
    // 如果最右的位置超过了数组空间，说明整个数组都是递增的，不用删除子数组
    if (leftEnd == len - 1)
        return 0;
    // 计算右边区域 能到的最左边的位置
    for (; rightStart > 1; rightStart--) {
        if (arr[rightStart] < arr[rightStart - 1])
            break;
    }
    // 既然leftEnd和rightStart两处位置符合递增的大小关系，那也就是说 左边全部 + 右边全部 是递增的，
    // 那自然也是最长的，所以要删除的也是最短的。例子：{1，4，6，2，3，7，6，7，8，9}
    if (arr[leftEnd] <= arr[rightStart])
        return rightStart - leftEnd - 1;
    // 执行到这一步，说明上面的情况都不符合，需要从三个区域中找删除最短的情况
    // 保留当前删除子数组最短的情况，和后面计算里，综合取最短！当前已知能删除的情况有：
    //    ① 保留左边区域， 删除之后的子数组
    //    ② 保留右边区域， 删除之前的子数组       二者取最短的
    var deleteMinLen = Math.min(len - leftEnd - 1, rightStart);
    // 然后计算 左边部分+右边部分 的情况。
    // 到这里因为已经排除了：左边全部 + 右边全部的情况，例子：{1,3,5,8,2,3,5,3,4,5,6,7,8,9}
    // 所以我们现在取最大化的结果，最少删除 左边和右边的长度
    // 最干脆的方式就是从左边区域的第一个起，
    // 找每一个元素（下标i）在右边区域第一个大于等于他的元素（下标j）
    // 取 j - i - 1最小的情况！
    // 二分查找的实现方式：
    for (var i = 0; i <= leftEnd; i++) {
        deleteMinLen = Math.min(deleteMinLen, findFirstBigIndex(arr, rightStart, arr[i]) - i - 1);
    }
    return deleteMinLen;
}
;
// 在一个非递减数组中找到第一个大于等于给定值的元素  典型二份查找问题
// 二份查找的非递归实现版本
function findFirstBigIndex(arr, left, num) {
    var low = left, hight = arr.length - 1;
    while (low <= hight) {
        var mid = low + Math.floor((hight - low) / 2);
        if (arr[mid] < num) {
            low = mid + 1;
        }
        else { // arr[mid] >= num
            // 如果已经是最左边的值或者当前位置的前一个小于num，说明当前位置就是第一个大于等于的元素
            if (mid == left || arr[mid - 1] < num)
                return mid;
            hight = mid - 1;
        }
    }
    return Number.MAX_VALUE;
}
