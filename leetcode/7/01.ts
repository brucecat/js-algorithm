function reverse(x: number): number {

    if (x < -2147483647 || x > 2147483648) {
        return 0
    }
    let s = x + ''

    let isPositive = !s.startsWith("-")

    if (!isPositive) {
        s = s.slice(1, s.length)
    }

    let stack: string[] = []

    let resStr = ""
    for (let c of s) {
        stack.push(c)
    }


    while (stack.length > 0) {
        resStr += stack.pop()
    }

    let res = +resStr

    if (!isPositive) {
        res = -res
    }

    return res
};