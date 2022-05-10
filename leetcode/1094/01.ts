class Difference {
    // 差分数组
    private diff: number[]

    constructor(nums: number[]) {
        let len = nums.length
        if (len === 0) {
            return
        }

        // 输入一个初始数组，区间操作将在这个数组上进行
        this.diff = new Array(len)

        // 据初始数组 差分数组
        this.diff[0] = nums[0]
        for (let i = 1; i < nums.length; i++) {
            this.diff[i] = nums[i] - nums[i - 1]
        }

        // console.log(this.diff);


    }

    // 给闭区间[i, j]增加val（可以是负数）
    public increment(i: number, j: number, val: number): void {
        this.diff[i] += val
        if (j + 1 < this.diff.length) {
            this.diff[j + 1] -= val
        }
    }

    // 返回结果数组
    // this.diff[i] = res[i] - res[i-1]
    public result(): number[] {
        // 根据diff数组计算返回nums数组
        let len = this.diff.length
        let res = new Array(len)
        res[0] = this.diff[0]

        for (let i = 1; i < len; i++) {
            res[i] = res[i - 1] + this.diff[i]
        }

        // console.log(res);

        return res
    }
}

// trips[i]代表着⼀组区间操作，旅客的上⻋和下⻋就相当于数组 的区间加减；
// 只要结果数组中的元素都⼩于capacity，就说明可以不超载运输所有旅客
function carPooling(trips: number[][], capacity: number): boolean {

    // 最多有1000个车站
    let nums = new Array(1001).fill(0)

    // 构造差分数组
    let df = new Difference(nums)

    trips.forEach(trip => {
        // 乘客数量
        let val = trip[0]

        // 第trip[1]站乘客上车
        let i = trip[1]

        // 第trip[2]站乘客下车
        // 乘客在车上的区间是 [i , j-1]
        let j = trip[2] - 1

        // 进行区间操作
        df.increment(i, j, val)
    })

    let res = df.result()

    // 客车自始至终不该超载
    for (let i = 0; i < res.length; i++) {
        if (capacity < res[i]) {
            return false;
        }
    }

    return true
};