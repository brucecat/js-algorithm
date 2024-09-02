function findUnsortedSubarray(nums: number[]): number {
    const sortedNums = nums.concat().sort((a, b) => a - b);
    console.log('sortedNums: ', sortedNums);

    let start = Number.MAX_VALUE;
    let end = Number.MIN_VALUE;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== sortedNums[i]) {
            start = i;
            break;
        }
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] !== sortedNums[i]) {
            end = i;
            break;
        }
    }

    // 说明本身就是有序的
    if (start === Number.MAX_VALUE && end === Number.MIN_VALUE) {
        return 0;
    }

    return end - start + 1;
}

const a = [2, 6, 4, 8, 10, 9, 15];
const res = findUnsortedSubarray(a);
console.log('res: ', res);
