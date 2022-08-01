/**
 * @param {number} n
 * @return {number}
 */

let fib = function (n) {
    if (n === 0) return 0;
    if (n === 2 || n === 1)
        return 1;
    let prev = 1, curr = 1;
    for (let i = 3; i <= n; i++) {
        let sum = prev + curr;
        prev = curr;
        curr = sum;
    }
    return curr;
}