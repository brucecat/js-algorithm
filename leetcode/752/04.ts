// 你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。每个拨轮可以自由旋转：例如把 '9' 变为 '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。

// 锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。

// 列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。

// 字符串 target 代表可以解锁的数字，你需要给出解锁需要的最小旋转次数，如果无论如何不能解锁，返回 -1 。

// 第x位向上拨一次
const turnUp = (target, x) => {
    let newX = target[x];
    if (newX == '9') {
        newX = '0';
    } else {
        newX = String(Number(newX) + 1);
    }
    return target.substring(0, x) + newX + target.substring(x + 1);
};

// 第x位向下拨一次
const turnDown = (target, x) => {
    let newX = target[x];
    if (newX == '0') {
        newX = '9';
    } else {
        newX = String(Number(newX) - 1);
    }
    return target.substring(0, x) + newX + target.substring(x + 1);
};

function openLock(deadends: string[], target: string): number {
    // 八叉树 BFS 0000 距离到 0202 的最短路径
    // 记录走过的路径
    const initialValue = '0000';
    const visited = new Set();
    const len = target.length;

    const queue = [initialValue];
    let times = 0;
    visited.add(initialValue);

    while (queue.length) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const cur = queue.shift();

            if (deadends.includes(cur)) {
                continue;
            }

            if (target === cur) {
                return times;
            }

            // 往下一层有八种可能
            for (let j = 0; j < len; j++) {
                const up = turnUp(cur, j);
                const down = turnDown(cur, j);

                if (!visited.has(up)) {
                    visited.add(up);
                    queue.push(up);
                }

                if (!visited.has(down)) {
                    visited.add(down);
                    queue.push(down);
                }
            }
        }

        times++;
    }

    return -1;
}

const deadends = ['0201', '0101', '0102', '1212', '2002'];
const target = '0202';

const res = openLock(deadends, target);
console.log('res: ', res);
