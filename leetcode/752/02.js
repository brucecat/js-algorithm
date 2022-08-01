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
    const deadSet = new Set(deadends);
    const visited = new Set();
    // 正向
    let queue1 = new Set(['0000']);
    // 反向
    let queue2 = new Set([target]);
    let step = 0;
    while (queue1.size && queue2.size) {
        // 临时存储本轮遍历结果
        const temp = new Set();
        for (let dead of queue1.values()) {
            if (deadSet.has(dead)) {
                continue;
            }
            // 正反向已相遇，返回结果即可。
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
        // 交换queue1与queue2,这样其实就是轮流遍历queue1与queue2，已达到轮流遍历效果。
        queue1 = queue2;
        queue2 = temp;
    }
    return -1;
};
 

作者：scuhzs
链接：https://leetcode.cn/problems/open-the-lock/solution/by-scuhzs-0f1g/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。