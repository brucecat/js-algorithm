function findTheWinner(n, k) {
    var queue = [];
    for (var i = 1; i <= n; i++) {
        queue.push(i);
    }
    while (queue.length > 1) {
        for (var i = 1; i < k; i++) {
            queue.push(queue.shift());
        }
        queue.shift();
    }
    return queue[0];
}
;
var findTheWinner1 = function (n, k) {
    if (n === 1) {
        return 1;
    }
    return (k + findTheWinner(n - 1, k) - 1) % n + 1;
};
var findTheWinner2 = function (n, k) {
    var winner = 1;
    for (var i = 2; i <= n; i++) {
        winner = (k + winner - 1) % i + 1;
    }
    return winner;
};
