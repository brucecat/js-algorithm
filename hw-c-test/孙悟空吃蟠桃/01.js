// 狒狒喜欢吃香蕉。这里有 N 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 H 小时后回来。

// 狒狒可以决定她吃香蕉的速度 K （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 K 根。如果这堆香蕉少于 K 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉，下一个小时才会开始吃另一堆的香蕉。

// 狒狒喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。

// 返回她可以在 H 小时内吃掉所有香蕉的最小速度 K（K 为整数）。

// function minEatingSpeed(piles, h) {
//     const minSpeed = piles.length > 1 ? Math.min(...piles) : 1;
//     const maxSpeed = Math.max(...piles);

//     // 缓存k是否可以
//     const kMap = {};

//     const isKPossible = (k) => {
//         if (kMap[k] === 1) return true;
//         if (kMap[k] === 2) return false;

//         debugger;

//         // 当前吃到第几堆
//         let j = 0;

//         // 吃第j堆的时候，吃了多少小时
//         let cost = 1;

//         // 模拟过程
//         for (let i = 1; i <= h; i++) {
//             // 每个小时吃k根
//             if (piles[j] <= cost * k) {
//                 // 成功吃掉
//                 cost = 1;
//                 j++;
//             } else {
//                 cost++;
//             }
//         }

//         // 可以吃完
//         if (j === piles.length) {
//             kMap[k] = 1;
//             return true;
//         }

//         kMap[k] = 2;
//         return false;
//     };

//     // k有可能时，是否是临界值的k
//     const isLimitK = (k) => {
//         return k > 0 && !isKPossible(k - 1);
//     };

//     // 二分查找
//     const search = () => {
//         const binarySearch = (left, right) => {
//             let mid = Math.floor((left + right) / 2);

//             if (isKPossible(mid) && !isLimitK(mid)) {
//                 // 切换到左区间查找
//                 return binarySearch(left, mid);
//             } else if (!isKPossible(mid)) {
//                 // 切换到右区间查找
//                 return binarySearch(mid + 1, right);
//             }

//             return mid;
//         };

//         return binarySearch(minSpeed, maxSpeed);
//     };

//     return search();
// }

const piles = [3, 6, 7, 11];
const H = 8;

// const piles = [312884470];
// const H = 312884469;

const res = minEatingSpeed(piles, H);
console.log('res: ', res);

// 从速度大到速度小一一验证
// for (let i = minSpeed; i <= maxSpeed; i++) {
//     if (isKPossible(i)) {
//         resK = i;
//         break;
//     }
// }

// 新算法
function minEatingSpeed(piles, h) {
    let left = 1;
    let right = Math.max(...piles);

    const kMap = {};

    // 一小时吃x的时候，要吃多久
    const helper = (k) => {
        if (kMap[k]) return kMap[k];

        let res = 0
        for (let i = 0; i <= piles.length - 1; i++) {
            res += Math.ceil(piles[i] / k)
        }

        kMap[k] = res
        return res;
    };

    // 吃的速度
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (helper(mid) === h) {
            // 搜索左侧边界
            right = mid;
        } else if (helper(mid) > h) {
            // 加快速度
            left = mid + 1;
        } else if (helper(mid) < h) {
            // 减低速度
            right = mid;
        }
    }

    return left;
}
