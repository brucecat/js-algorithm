/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @param target int整型
 * @return int整型
 */
function search(nums: number[], target: number): number {
    // write code here
    let left = 0;
    let right = nums.length - 1;

    const binarySearch = (left, right) => {
        debugger
        if (left === right && nums[left] !== target) {
            return -1;
        }

        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > target) {
            // 切换到左区间查找
            return binarySearch(left, mid);
        } else if (nums[mid] < target) {
            // 切换到右区间查找
            return binarySearch(mid + 1, right);
        }

        return mid;
    };

    const res = binarySearch(left, right);
    return res;
}

// const res = search([-1,0,3,4,6,10,13,14], 13)
// console.log('res: ', res);

const res = search([-1, 1], 0);
console.log('res: ', res);
