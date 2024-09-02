function reverseParentheses(s: string): string {
    // 存字符的栈
    const charStack = [];

    // 从栈中取出( ... )中的全部字符
    const helper = (): string => {
        let res = '';
        while (charStack[charStack.length - 1] !== '(') {
            res += charStack.pop();
        }

        // 把 ( 也清退出来
        charStack.pop();

        return res;
    };

    for (let i = 0; i < s.length; i++) {
        // 入栈
        if (s[i] === '(') {
            charStack.push('(');
        } else if (s[i] === ')') {
            let res = helper();
            charStack.push(...res.split(''));
        } else {
            // 是字符 入字符栈
            charStack.push(s[i]);
        }
    }

    return charStack.join('');
}

const s1 = '(u(love)i)';
const res1 = reverseParentheses(s1);
console.log('res1: ', res1);


const s2 = "a(bcdefghijkl(mno)p)q"
const res2 = reverseParentheses(s2);
console.log('res2: ', res2);