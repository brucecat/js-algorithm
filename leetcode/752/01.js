function plusOne (s, j) {
    const char = s.split('');
    if (char[j] === '9') {
        char[j] = '0'
    } else {
        char[j] = String(+char[j] + 1);
    }
    return char.join('')
}

function minusOne (s, j) {
    const char = s.split('');
    if (char[j] === '0') {
        char[j] = '9'
    } else {
        char[j] = String(+char[j] - 1);
    }
    return char.join('')
}

var openLock = function(deadends, target) {
    // 死亡集合
    const deadSet = new Set(deadends);
    // 防止死锁，记录下已经遍历过的结果
    const visited = new Set(['0000']);
    let queue = ['0000'];
    let step = 0;
    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            const dead = queue.shift();
            // 在死亡列表中，跳过本次
            if (deadSet.has(dead)) {
                continue;
            }
            if (dead === target) {
                return step;
            }
            // 模拟转盘
            for (let j = 0; j < 4; j++) {
                // 向上转
                const up = plusOne(dead, j);
                if (!visited.has(up)) {
                    queue.push(up);
                    visited.add(up);
                }
                // 向下转
                const down = minusOne(dead, j);
                if (!visited.has(down)) {
                    queue.push(down);
                    visited.add(down);
                }
            }
        }
        step++;
    }
    return -1;
};
 
 