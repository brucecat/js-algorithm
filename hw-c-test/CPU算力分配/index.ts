const getResult = (listA: number[], listB: number[]) => {
    const sumA = getSum(listA);
    const sumB = getSum(listB);

    let resA = Number.MAX_VALUE;
    let resB = Number.MAX_VALUE;

    for (let i = 0; i < listA.length; i++) {
        const a = listA[i];
        const targetB = a - (sumA - sumB) / 2;

        if (listB.includes(targetB)) {
            resA = Math.min(resA, a);
            resB = targetB;
        }
    }
    return [resA, resB];
};

const getSum = (numList: number[]) => {
    return numList.reduce((total, cur) => {
        return total + cur;
    }, 0);
};

const A = [1, 2, 5];
const B = [2, 4];
const res = getResult(A, B);
console.log('res: ', res);
