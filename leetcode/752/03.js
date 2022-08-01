function plusOne(s, j) {
    const char = s.split('');
    if (char[j] === '9') {
        char[j] = '0'
    } else {
        char[j] = String(+char[j] + 1);
    }
    return char.join('')
}

function minusOne(s, j) {
    const char = s.split('');
    if (char[j] === '0') {
        char[j] = '9'
    } else {
        char[j] = String(+char[j] - 1);
    }
    return char.join('')
}

var openLock = function (deadends, target) {
    const deadSet = new Set(deadends);
    const visited = new Set();
    let queue1 = new Set(['0000']);
    let queue2 = new Set([target]);
    let step = 0;
    while (queue1.size && queue2.size) {
        // 在这里每次选择一个较小的集合扩散，占用的空间会相对较小
        if (queue1.size > queue2.size) {
            const swap = queue1;
            queue1 = queue2;
            queue2 = swap;
        }
        const temp = new Set();
        for (let dead of queue1.values()) {
            if (deadSet.has(dead)) {
                continue;
            }
            if (queue2.has(dead)) {
                return step;
            }
            visited.add(dead);
            for (let j = 0; j < 4; j++) {
                const up = plusOne(dead, j);
                if (!visited.has(up)) {
                    temp.add(up);
                }
                const down = minusOne(dead, j);
                if (!visited.has(down)) {
                    temp.add(down);
                }
            }
        }
        step++;
        queue1 = queue2;
        queue2 = temp;
    }
    return -1;
};
