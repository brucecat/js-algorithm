const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on('line', function (line) {
    const res = getResult(line);
    console.log(res);
});

type Operator = '#' | '$';

const operatorEnum = ['#', '$'];
const isOperator = (str: string) => {
    return operatorEnum.includes(str);
};

const calcHelper = (x: number, y: number, operation: Operator) => {
    let res = 0;

    switch (operation) {
        case '#':
            res = 4 * x + 3 * y + 2;
            break;

        case '$':
            res = 2 * x + y + 3;
            break;
    }
    return res;
};

const getResult = (line: string) => {
    const operator1Reg = /(\d+)#(\d+)/;

    let replaceOperator1Str = line;

    // 计算#
    while (replaceOperator1Str.includes('#')) {
        // @ts-ignore
        replaceOperator1Str = replaceOperator1Str.replace(operator1Reg, (op: string, x: string, y: string) => {
            return calcHelper(Number(x), Number(y), '#');
        });
    }

    // 计算$
    // @ts-ignore
    const res = replaceOperator1Str.split('$').reduce((total: any, cur: any) => {
        return calcHelper(Number(total), Number(cur), '$');
    });

    return res;
};

const getResult01 = (line: string) => {
    const tokens = line.split('');
    const len = line.length;

    // 从指定的index开始往后截取一段数字, 并返回下一个符号的索引
    const getNumFromIndex = (index) => {
        let res = '';
        let nextIndex = index;

        while (!(isOperator(tokens[nextIndex]) || nextIndex > tokens.length - 1)) {
            res += tokens[nextIndex];
            nextIndex++;
        }

        return [Number(res), nextIndex];
    };

    const list: Array<number | string> = [];
    let curIndex = 0;
    while (curIndex <= len - 1) {
        if (isOperator(tokens[curIndex])) {
            list.push(tokens[curIndex]);
            curIndex++;
        } else {
            // 截取数字出来
            const [num, nextCur] = getNumFromIndex(curIndex);
            list.push(num);
            curIndex = nextCur;
        }
    }

    // 步骤一：先计算#
    // 将list按照$进行分割
    const list2: any[] = [];
    let tempList: Array<number | string> = [];
    const getResFromTempList = (tempList) => {
        const x = tempList[0] as number;
        const y = tempList[2] as number;
        const calcRes = calcHelper(x, y, '#');
        return calcRes;
    };
    for (let i = 0; i < list.length; i++) {
        if (list[i] === '$') {
            list2.push(getResFromTempList(tempList));
            tempList = [];
        } else {
            tempList.push(list[i]);
        }
    }

    // 最后收一下尾
    if (tempList.length) {
        list2.push(getResFromTempList(tempList));
        tempList = [];
    }

    // 步骤二：计算 $
    const res = list2.reduce((total, cur) => {
        return calcHelper(total, cur, '$');
    });

    return res;
};

const a = '7#6$5#12';
const res1 = getResult(a);
console.log('res1: ', res1);

// // 维护一个栈
// const getResult = (line: string) => {
//   const tokens = line.split('');

//   const stack: (number | string)[] = [];

//   // 清空栈，并获取栈中对应的数字
//   const getCurNumInStack = () => {
//       let res = 0;

//       // 10进制的系数
//       let base = 1;
//       while (stack.length) {
//           res += base * Number(stack.pop());
//           base *= 10;
//       }
//       return res;
//   };

//   // 从指定的index开始往后截取一段数字, 并返回下一个符号的索引
//   const getNumFromIndex = (index) => {
//       let res = '';
//       while (!(isOperator(tokens[index]) || index >= tokens.length - 1)) {
//           res += Number(tokens[index]);
//           index++;
//       }
//       return [Number(res), index];
//   };

//   let cur = 0;
//   while (cur <= tokens.length - 1) {
//       if (isOperator(tokens[cur]) && cur + 1 < tokens.length - 1) {
//           // 取出计算
//           const x = getCurNumInStack();
//           const [y, nextCur] = getNumFromIndex(cur + 1);
//           const res = calcHelper(x, y, tokens[cur] as Operator);

//           // 计算结果放回到栈中
//           stack.push(res.toString());
//           cur = nextCur;
//       } else {
//           stack.push(tokens[cur]);
//           cur++;
//       }
//   }

//   console.log('stack: ', stack);
// };

// 从列表里取出来一一运算
// while(list.length > 1){
//     const x = list.shift() as number;
//     const operator = list.shift();
//     const y = list.shift() as number;

//     const res = calcHelper(x, y, operator as Operator);

//     list.unshift(res);
// }
