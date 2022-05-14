// 从target出发【起始状态】，使用每个贴纸去掉对应个数的字母【状态转移】，看最终能否出现空字符串【目标状态】。
// 优化: 优先从左往右去掉当前状态中的字符，减少排列组合情况。
// (比如我们删1次stickers[0]同时删1次stickers[1]，就有两个顺序达到同样的效果)【大白话就是先删a后删b，和先删b后删a一样，我们在乎的是选了ab，而不是排列ab】


/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function (stickers, target) {
    const set = new Set(target), availables = new Array(), queue = new Queue(), explored = new Set()
    const getCounter = (s) => {
        const map = new Map()
        for (const c of s) {
            if (set.has(c)) {
                if (map.has(c)) {
                    map.set(c, map.get(c) + 1)
                } else {
                    map.set(c, 1)
                }
            }
        }
        return map.size > 0 ? map : null
    }

    const transfer = (s, map) => {
        const copy = new Map(map), res = []
        for (const c of s) {
            if (copy.has(c) && copy.get(c) > 0) {
                copy.set(c, copy.get(c) - 1)
            } else {
                res.push(c)
            }
        }
        return res.join("")
    }
    for (const s of stickers) {
        const mp = getCounter(s)
        if (mp != null) {
            availables.push(mp)
        }
    }
    queue.enqueue([target, 0])
    explored.add(target)
    while (!queue.isEmpty()) {
        const [cur, step] = queue.dequeue()
        if (cur.length == 0) {
            return step
        }
        for (const mp of availables) {
            if (mp.has(cur.charAt(0))) {
                const nxt = transfer(cur, mp)
                if (!explored.has(nxt)) {
                    explored.add(nxt)
                    queue.enqueue([nxt, step + 1])
                }
            }
        }
    }
    return -1
};
