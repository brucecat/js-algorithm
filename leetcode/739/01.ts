// 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。

function dailyTemperatures(temperatures: number[]): number[] {
    const len = temperatures.length;

    const resultArr = new Array(len).fill(0);

    // 单调栈求解
    const stack: number[] = [];
    const isEmpty = () => {
        return stack.length === 0;
    };
    const getStackTop = () => {
        return temperatures[stack[stack.length - 1]];
    };

    // 初始化
    stack.push(0);

    // 正着入栈
    for (let i = 1; i < len; i++) {
        const curNum = temperatures[i];

        while (!isEmpty() && getStackTop() < curNum) {
            // 出栈
            const topIndex = stack.pop();

            // 距离步数
            resultArr[topIndex] = i - topIndex;
        }

        // 当前元素入栈
        stack.push(i);
    }

    return resultArr;
}

const a = [73, 74, 75, 71, 69, 72, 76, 73];
const res = dailyTemperatures(a);
console.log('res: ', res);
// 输出: [1,1,4,2,1,1,0,0]
