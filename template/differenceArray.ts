class Difference {
    // 差分数组
    private diff: number[]

    constructor(nums: number[]) {
        let len = nums.length
        if (len === 0) {
            return
        }

        this.diff = new Array(len)
        // 据初始数组 差分数组
        this.diff[0] = nums[0]

        for (let i = 1; i < nums.length; i++) {
            this.diff[i] = nums[i] - nums[i - 1]
        }

    }


    // 

    // 结果数组
    public result(): number[] {
        return []
    }
}