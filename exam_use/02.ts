// 连续求和公式
const getSum = (start, end) => {
    // [start, end]的区间和
    return ((start + end) * (end - start + 1)) / 2;
};

const getResult = (num: number) => {
    // 如果是奇数
    if (num % 2) {
        const left = Math.floor(num / 2);
        const right = left + 1;
        return `${num}=${left}+${right}`;
    }

    // 如果是偶数
    // start end一定都小于n/2
    const half = num / 2;
    console.log('half: ', half);
    for (let start = 1; start <= half; start++) {
        for (let end = start + 1; end <= half; end++) {
            if (getSum(start, end) === num) {
                let res = `${num}=`;

                for (let i = start; i <= end; i++) {
                    res += `${i}`;

                    if (i !== end) {
                        res += '+';
                    }
                }
                return res;
            }
        }
    }

    return 'N';
};

const a = 21;
const res = getResult(a);
console.log('res: ', res);

const b = 22;
const res2 = getResult(b);
console.log('res2: ', res2);
