function binaryGap(n: number): number {
    let res = 0

    let binary = n.toString(2)

    // 开头必定是1
    let left = 0
    for (let i = 1; i < binary.length; i++) {
        const element = binary[i];

        if (element == '1') {
            // 更新最大距离
            res = Math.max(res, i - left)

            // 更新距离计算的起点
            left = i
        }
    }
    return res
};