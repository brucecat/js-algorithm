function removeDuplicates(s: string, k: number): string {
    let stack = [];
    let counter = [];
    for (let elem of s) {
        if (stack[stack.length - 1] === elem) {
            counter[counter.length - 1]++;
        }
        else {
            counter.push(1);
        }
        stack.push(elem);
        if (counter[counter.length - 1] === k) {
            stack.splice(stack.length - k, k);
            counter.pop();
        }
    }
    return stack.join('');
};


// 正则表达式
function removeDuplicates01(s: string, k: number): string {
    if (k == 1) {
        return ""
    }

    // 记录上一次的串
    let res = s

    // 无脑正则删除连续k个重复的字符
    function removeDuplicate() {
        let reg = new RegExp("(.)\\1{" + (k - 1) + "}", "g")
        s = s.replaceAll(reg, "")
    }

    while (true) {
        // 更新s
        removeDuplicate()

        // 比较
        if (res == s) {
            break
        }

        // 更新记录
        res = s
    }
    return res
};




// 正则表达式
function removeDuplicates02(s: string, k: number): string {
    let regExp = new RegExp('(.)\\1{' + (k - 1) + '}');
    let s2 = '';
    while (s2 != s) {
        s2 = s;
        s = s2.replace(regExp, '');
    }
    return s2;
};