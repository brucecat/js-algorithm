// 给你一个字符串 s，首尾相连成一个环形，请你在环中找出 'o' 字符出现了偶数次最长子字符串的长度。

const getResult = (str) => {
    let oNum = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'o') {
            oNum++;
        }
    }

    if (oNum === 0) {
        return 0;
    }

    if (oNum % 2) {
        return str.length - 1;
    }

    return str.length;
};

const res = 'alolobo';
console.log('res: ', getResult(res));
