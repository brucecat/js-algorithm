// 从target出发【起始状态】，使用每个贴纸去掉对应个数的字母【状态转移】，看最终能否出现空字符串【目标状态】。
// 优化: 优先从左往右去掉当前状态中的字符，减少排列组合情况。
// (比如我们删1次stickers[0]同时删1次stickers[1]，就有两个顺序达到同样的效果)【大白话就是先删a后删b，和先删b后删a一样，我们在乎的是选了ab，而不是排列ab】
/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function (stickers, target) {
    var set = new Set(target), availables = new Array(), queue = new Queue(), explored = new Set();
    var getCounter = function (s) {
        var map = new Map();
        for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
            var c = s_1[_i];
            if (set.has(c)) {
                if (map.has(c)) {
                    map.set(c, map.get(c) + 1);
                }
                else {
                    map.set(c, 1);
                }
            }
        }
        return map.size > 0 ? map : null;
    };
    var transfer = function (s, map) {
        var copy = new Map(map), res = [];
        for (var _i = 0, s_2 = s; _i < s_2.length; _i++) {
            var c = s_2[_i];
            if (copy.has(c) && copy.get(c) > 0) {
                copy.set(c, copy.get(c) - 1);
            }
            else {
                res.push(c);
            }
        }
        return res.join("");
    };
    for (var _i = 0, stickers_1 = stickers; _i < stickers_1.length; _i++) {
        var s = stickers_1[_i];
        var mp = getCounter(s);
        if (mp != null) {
            availables.push(mp);
        }
    }
    queue.enqueue([target, 0]);
    explored.add(target);
    while (!queue.isEmpty()) {
        var _a = queue.dequeue(), cur = _a[0], step = _a[1];
        if (cur.length == 0) {
            return step;
        }
        for (var _b = 0, availables_1 = availables; _b < availables_1.length; _b++) {
            var mp = availables_1[_b];
            if (mp.has(cur.charAt(0))) {
                var nxt = transfer(cur, mp);
                if (!explored.has(nxt)) {
                    explored.add(nxt);
                    queue.enqueue([nxt, step + 1]);
                }
            }
        }
    }
    return -1;
};
