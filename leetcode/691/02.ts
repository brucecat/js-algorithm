/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
const ACharCode = 97;
var minStickers = function (stickers, target) {
    const N = stickers.length;
    let counts = Array(N).fill().map(() => Array(26).fill(0));
    let charCodeIndex;
    // 把stickers中的每一项(字符串)放入一个长度为26的数组里，数组的下标代表当前字符的charCode相对'a'的charCode的偏移量
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < stickers[i].length; j++) {
            charCodeIndex = stickers[i][j].charCodeAt(0) - ACharCode;
            counts[i][charCodeIndex]++;
        }
    }

    let dp = new Map();
    dp.set("", 0);
    let ans = process(counts, target, dp);

    return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
};

function process(stickers, t, dp) {
    if (dp.has(t)) {
        return dp.get(t);
    }

    // 把target(字符串)放入一个长度为26的数组里，数组的下标代表当前字符的charCode相对'a'的charCode的偏移量
    let tcounts = Array(26).fill(0);
    for (let i = 0; i < t.length; i++) {
        tcounts[t[i].charCodeAt(0) - ACharCode]++;
    }

    const N = stickers.length;
    let min = Number.MAX_SAFE_INTEGER;
    // stickers中以每一项作为第一个，所有分支挨个试一遍
    for (let i = 0; i < N; i++) {
        let sticker = stickers[i];
        // 剪枝优化，当前的sticker包含target中的第一个字符
        if (sticker[t.charCodeAt(0) - ACharCode] > 0) {
            let builder = [];
            for (let j = 0; j < 26; j++) {
                if (tcounts[j] > 0) {
                    let nums = tcounts[j] - sticker[j];
                    for (let k = 0; k < nums; k++) {
                        builder.push(j + ACharCode);
                    }
                }
            }
            const rest = String.fromCharCode(...builder);
            min = Math.min(min, process(stickers, rest, dp));
        }
    }

    let ans = min + ((min === Number.MAX_SAFE_INTEGER) ? 0 : 1);
    dp.set(t, ans);

    return ans;

}

