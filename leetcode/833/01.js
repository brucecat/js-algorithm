// const _ = require('lodash-es');

import _ from 'lodash-es';
/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (s, indices, sources, targets) {
    const len = s.length
    const resultArray = Array(n);
    const resultLenList = Array(n).fill(1); // 无需替换时 i+=1

    const indicesInfoMap = {};

    indices = indices.sort();

    // 如果能匹配，标记flag为1 否则为0
    _.forEach(indices, (i, index) => {
        const curSource = sources[index];
        const curComparer = s.slice(i, i + curSource.length)

        if (curComparer == curSource) {
            indicesInfoMap[i] = [sources[index], targets[index], true];
        } else {
            indicesInfoMap[i] = [sources[index], targets[index], false];
        }
    });

    console.log(indicesInfoMap)

    // 拼凑结果
    let res = '';
    const waitIndiceList = _.keys(indicesInfoMap);
    _.forEach(s, (char, charIndex) => {
        const curWaitIndice = waitIndiceList[0];

        if (charIndex == curWaitIndice) {
            const curInfoItem = indicesInfoMap[curWaitIndice]
            if (curInfoItem && curInfoItem[2]) {
                res += curInfoItem[1];
                waitIndiceList.shift()
            } else {
                res += char;
            }
        } else {
            res += char;
        }
    });

    return res
};

const res = findReplaceString('abcd', [0, 2], ['a', 'cd'], ['eee', 'ffff']);
console.log('res: ', res);
