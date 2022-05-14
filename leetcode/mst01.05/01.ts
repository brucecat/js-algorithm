function oneEditAway(first: string, second: string): boolean {
    let m = first.length, n = second.length
    if (Math.abs(m - n) > 1) {
        return false
    }

    for (let i = 0; i < Math.min(m, n); i++) {
        if (first[i] != second[i]) {
            let flag1 = first.slice(i + 1) == second.slice(i + 1)
            let flag2 = first.slice(i) == second.slice(i + 1)
            let flag3 = first.slice(i + 1) == second.slice(i)
            return flag1 || flag2 || flag3
        }
    }
    return true
};