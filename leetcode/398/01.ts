class Solution {
    private nums: number[]
    private need: number
    constructor(nums: number[]) {
        this.nums = nums;
        // 需要k个数据，在本题中，k等于1
        this.need = 1;
    }


    // 假设当前正要读取第n个数据，则我们以1/n的概率留下该数据，否则以(n-1)/n 的概率留下前n-1个数据中的一个。
    // 而前n-1个数组留下的那个概率为1/(n-1),
    // 因此最终留下上次n-1个数中留下的那个数的概率为[1/(n-1)]*[(n-1)/n] = 1/n,符合均匀分布的要求

    pick(target: number): number {
        let count = 0
        let res = 0

        this.nums.forEach((value, key) => {
            if (value === target) {
                //我们的目标对象中选取。
                count++;
                //我们以1/n的概率留下该数据
                if (Math.floor(Math.random() * count) === 0) {
                    res = key;
                }
            }
        })
        return res
    }
}