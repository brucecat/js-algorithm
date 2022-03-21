# 题目思路部分

## 1





# 前缀和

前缀和主要适⽤的场景是原始数组不会被修改的情况下，频繁查询某个区间的累加和。

## 303

前缀和

```js
class NumArray {
    private preSumArray: number[]

    constructor(nums: number[]) {
        // 用一个数组记录前缀和
        //  preSumArray[0] = 0，便于计算累加和
        // preSumArray[i+1]：num的[0, i]的区间和
        let preSumArray = new Array(nums.length + 1);
        preSumArray[0] = 0;

        // 存放前缀和
        for (let i = 1; i < preSumArray.length; i++) {
            preSumArray[i] = preSumArray[i - 1] + nums[i - 1]
        }

        this.preSumArray = 

    }
    /* 查询闭区间 [left, right] 的累加和 */
    sumRange(left: number, right: number): number {
        // 即求num的[0, right]的区间和 - num的[0, left-1]的区间和
        return this.preSumArray[right + 1] - this.preSumArray[left] - 
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
```

## 304

前缀和

```js

```





## 560







# 差分数组

差分数组的主要适⽤场景是频繁对原始数组的 某个区间的元素进⾏增减。
