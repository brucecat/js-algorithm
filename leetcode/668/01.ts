// https://leetcode.cn/problems/kth-smallest-number-in-multiplication-table/solution/dong-tu-yan-shi-by-xiaohu9527-3k7s/

function findKthNumber(m: number, n: number, k: number): number {
    let left = 1
    let right = m * n

    while (left < right) {
        let mid = (left + right) >> 1
        if (cnt(mid, m, n) < k) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    return left
};



function cnt(mid: number, m: number, n: number) {
    let ret = 0
    let i = m
    let j = 1

    while (i >= 1 && j <= n) {
        if (i * j <= mid) {
            ret += i
            j += 1
        } else {
            i -= 1
        }
    }

    return ret

}