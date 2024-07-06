// n = 4, k = 2
function combine(n: number, k: number): number[][] {
    const res = [];

    const used = new Array(n).fill(false);

    const backTrack = (start, path, used) => {
        if (path.length === k) {
            res.push(path.concat());
            return;
        }

        for (let i = start; i <= n - 1; i++) {
            if (used[i]) {
                continue;
            }

            path.push(i + 1);
            used[i] = true;

            backTrack(i + 1, path, used);

            // 撤销选择
            path.pop();
            used[i] = false;
        }
    };

    backTrack(0, [], used);

    return res;
}

const n = 4;
const k = 2;

const res = combine(4, 2);
console.log('res: ', res);
