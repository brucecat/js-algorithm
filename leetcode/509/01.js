/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0)
        return 0;
    if (n === 2 || n === 1)
        return 1;
    var prev = 1, curr = 1;
    for (var i = 3; i <= n; i++) {
        var sum = prev + curr;
        prev = curr;
        curr = sum;
    }
    return curr;
};
