// 程序员小明打了一辆出租车去上班。出于职业敏感，他注意到这辆出租车的计费表有点问题，总是偏大。

// 出租车司机解释说他不喜欢数字4，所以改装了计费表，任何数字位置遇到数字4就直接跳过，其余功能都正常。

// 比如：

// 23再多一块钱就变为25；
// 39再多一块钱变为50；
// 399再多一块钱变为500；
// 小明识破了司机的伎俩，准备利用自己的学识打败司机的阴谋。

// 给出计费表的表面读数，返回实际产生的费用。

const getResult = (showNum: number) => {
    const showNumStr = String(showNum);

    let res = 0;
    for (let i = showNumStr.length - 1; i >= 0; i--) {
        let curNum = Number(showNumStr[i]);
        if (curNum > 4) {
            curNum--;
        }

        // 进制位
        const temp = showNumStr.length - 1 - i;
        res += (9 ** temp) * curNum;
    }

    return res;
};

const a = 100;
const res = getResult(a);
console.log('res: ', res);
