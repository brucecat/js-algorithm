const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const strList = [];

rl.on('line', function (line) {
    strList.push(line);
    

    if(strList.length === 2){
        const res = getResult(strList[0], strList[1]);
        console.log(res);
    }
});


// 给定两个只包含小写字母的字符串，计算两个字符串的最大公共子串的长度
const getResult = (str1, str2) => {
    const len1 = str1.length;
    const len2 = str2.length;

    // dp[i][j]定义：str1[0..i-1] 和 str2[0..j-1]的最大公共子串长度
    const dp = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0));

    const str1List = str1.split('');
    const str2List = str2.split('');

    let max = 0;

    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            if (str1List[i] === str2List[j]) {
                const curRes = dp[i][j] + 1;
                dp[i + 1][j + 1] = curRes;
                max = Math.max(max, curRes);
            }
        }
    }

    return max;
};


