/*
    数组nums下标范围为[0, nums.size() - 1]；
    数组内元素范围为[1, max(num)]；
    遍历一遍nums，每个元素都可以映射为nums数组中的唯一下标，如果任意元素出现过两次，那么该下标会被访问两次
    在第一次访问此下标时，对其进行标记(比如对其取反)，当第二次访问到该位置时，若发现已经被标记过，说明当前元素已经是第二次出现了。
    加入答案。
*/
function findDuplicates(nums: number[]): number[] {
    const ans = new Array()
    for (let i = 0; i < nums.length; i++) {
        const org = Math.abs(nums[i])
        if (nums[org - 1] > 0) {
            nums[org - 1] *= -1
        } else {
            ans.push(org)
        }
    }
    return ans
};