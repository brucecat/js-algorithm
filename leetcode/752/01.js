function openLock(deadends, target) {
    // 记录需要跳过的死亡密码
    var deads = new Set();
    for (var _i = 0, deadends_1 = deadends; _i < deadends_1.length; _i++) {
        var s = deadends_1[_i];
        deads.add(s);
    }
    // 记录已经穷举过的密码，防止走回头路
    var visited = new Set();
    var q = [];
    // 从起点开始启动广度优先搜索
    var step = 0;
    q.push("0000");
    visited.add("0000");
    while (q.length !== 0) {
        var sz = q.length;
        /* 将当前队列中的所有节点向周围扩散 */
        for (var i = 0; i < sz; i++) {
            var cur = q.shift();
            /* 判断是否到达终点 */
            if (deads.has(cur))
                continue;
            if (cur == target)
                return step;
            /* 将一个节点的未遍历相邻节点加入队列 */
            for (var j = 0; j < 4; j++) {
                var up = plusOne(cur, j);
                if (!visited.has(up)) {
                    q.push(up);
                    visited.add(up);
                }
                var down = minusOne(cur, j);
                if (!visited.has(down)) {
                    q.push(down);
                    visited.add(down);
                }
            }
        }
        /* 在这里增加步数 */
        step++;
    }
    // 如果穷举完都没找到目标密码，那就是找不到了
    return -1;
}
;
// 将 s[j] 向上拨动一次
function plusOne(s, j) {
    var char = s.split('');
    if (char[j] === '9') {
        char[j] = '0';
    }
    else {
        char[j] = String(+char[j] + 1);
    }
    return char.join('');
}
// 将 s[i] 向下拨动一次
function minusOne(s, j) {
    var char = s.split('');
    if (char[j] === '0') {
        char[j] = '9';
    }
    else {
        char[j] = String(+char[j] - 1);
    }
    return char.join('');
}
