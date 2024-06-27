/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @return int整型
 */
// export function findPeakElement(nums: number[]): number {
//     // write code here
//     // let left = 0;
//     // let right = nums.length - 1;

//     const max = Math.max(...nums);
//     return nums.findIndex((i) => i === max);
// }

export function findPeakElement(nums: number[]): number {
    // write code here
    let left = 0;
    let right = nums.length - 1;

    while (left > right) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] > nums[mid + 1]) {
            // 往左找
            right = mid;
        } else if (nums[mid] < nums[mid + 1]) {
            // 往右找
            left = mid + 1;
        }
    }

    // 往右找的结果
    return right;
}
