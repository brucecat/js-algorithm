const rl = require('readline').createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    const line = await readline();

    let base = 10; // 都是 10 元的整数倍
    let money = parseInt(line.split(' ')[0]) / base; // 自己拥有的钱
    let sum = parseInt(line.split(' ')[1]); // 自己可以买多少物品

    let index = 0; //用于接收输入的数组
    let goodImportanceList = [0]; //自己购买这件物品的重要度
    let goodFatherList = [0]; //自己购买的这件物品是不是主件
    let goodPriceList = [0]; //自己购买这件物品的价格

    while (index < sum) {
        // 使用循环把数据拿到
        let line1 = await readline();
        line1 = line1.split(' ');
        goodPriceList.push(parseInt(line1[0]) / base); //每件物品的价格
        goodImportanceList.push(parseInt(line1[1])); //每件物品的重要度
        goodFatherList.push(parseInt(line1[2])); //每件物品是否为主件
        index++;
    }

    console.log(goodPriceList);
    console.log(goodImportanceList);
    console.log(goodFatherList);

    //构建dp数组
    //构建二维dp数组，横坐标为自己买的物品数目，纵坐标为自己花费的价格，全部初始化为0
    const test = (money, sum, goodSatisfaction, goodIsKey, goodSum) => {
        const dp = new Array(sum + 1).fill(0).map(() => new Array(money + 1).fill(0));

        //开始递推
        let res = 0;

        // 横坐标逐渐增加的过程，模拟自己的钱越来越多
        for (let i = 1; i <= sum; i++) {
            //纵坐标逐渐增加的过程，模拟自己能买物品的数量越来越多
            for (let j = 0; j <= money; j++) {
                //如果是正常的背包问题现在套用公式即可，但是现在添加的是否为主副件

                // ------------如果现在是主件, 有 0，1，2个附件 ------------
                if (!goodIsKey[i]) {
                    // 价格可以买下
                    if (j >= goodSum[i]) {
                        const sub = []; //收集主件后的附件
                        for (let k = 1; k <= goodIsKey.length; k++) {
                            if (goodIsKey[k] === i) {
                                sub.push(k); // 这个主件有几个附件，就以1，2的形式push进数组
                            }
                        }

                        //在没有附件的情况下就是套用背包公式dp数组
                        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - goodSum[i]] + goodSatisfaction[i] * goodSum[i]);

                        //之后分类讨论，因为题目说了只有1，2附件就依次写出来
                        const firstChildKey = sub[0];
                        const secondChildKey = sub[1];

                        //如果有一个附件，比较是否买
                        if (firstChildKey && j >= goodSum[i] + goodSum[firstChildKey]) {
                            dp[i][j] = Math.max(
                                dp[i - 1][j],
                                dp[i - 1][j - goodSum[i]] + goodSatisfaction[i] * goodSum[i]
                            );
                        }

                        // 如果还有第二个附件，比较是否要买下
                        if (secondChildKey && j >= goodSum[i] + goodSum[secondChildKey]) {
                            dp[i][j] = Math.max(
                                dp[i - 1][j],
                                dp[i - 1][j - goodSum[i]] + goodSatisfaction[i] * goodSum[i]
                            );
                        }
                    }
                }
            }
        }
    };
    test(money, sum);

    // console.log(test(money, sum, goodSatisfaction, goodIsKey, goodSum))
})();
