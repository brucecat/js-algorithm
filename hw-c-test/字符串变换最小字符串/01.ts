// 给定一个字符串s，最多只能进行一次变换，返回变换后能得到的最小字符串（按照字典序进行比较）。

// 变换规则：交换字符串中任意两个不同位置的字符。

const getResult = (str) => {
    const rawStr = str.split('');
    const minStr = str.split('').sort();

    console.log('minStr: ', minStr);

    if (minStr === str) {
        return minStr;
    }

    // 维护 字符 => 索引
    const indexMap = new Map();
    for (let i = 0; i < str.length; i++) {
        indexMap.set(str[i], i);
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== minStr[i]) {
            // 本应在这个位置的字符
            const targetChar = minStr[i];

            // 实际上它在的索引
            const curIndex = indexMap.get(targetChar);

            swap(rawStr, i, curIndex);

            break;
        }
    }

    return rawStr.join('');
};

const swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
};

// const a = 'abcdefg';
// console.log(getResult(a));

const b = 'abfedc';
console.log(getResult(b));
