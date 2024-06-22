function maxArea(height: number[]): number {
    let left = 0,
        right = height.length - 1;
    let res = 0;

    // 计算最终结果
    while (left < right) {
        // 当前能计算出来的矩阵面积
        const curArea = (right - left) * Math.min(height[left], height[right]);
        res = Math.max(curArea, res);

        // 矮的一边向内移动
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return res;
}
