// 橱窗里有一排宝石，不同的宝石对应不同的价格，宝石的价格标记为 gems[i]

// 0 ≤ i < n
// n = gems.length
// 宝石可同时出售0个或多个，如果同时出售多个，则要求出售的宝石编号连续；

// 例如客户最大购买宝石个数为m，购买的宝石编号必须为：gems[i]，gems[i+1]，...，gems[i+m-1]

// 0 ≤ i < n
// m ≤ n
// 假设你当前拥有总面值为 value 的钱，请问最多能购买到多少个宝石，如无法购买宝石，则返回0。

const getResult = (gems, value) => {
    let res = 0;

    let left = 0;
    let right = 0;
    let windowSum = 0;

    outer: while (right <= gems.length - 1) {
        // 更新窗口和
        windowSum += gems[right];

        // 可以买这块
        if (windowSum <= value) {
            right++;
        } else {
            // 如果总和超过了拥有的钱，则 [l, r-1] 范围的宝石是能够买下的，记录此时的宝石数量 r-1 - l + 1
            res = Math.max(res, right - 1 - left + 1);

            while (left < right) {
                // 由于纳入r位置宝石后，总和超过了拥有的钱，因此我们尝试丢弃l指针宝石，即l++
                windowSum = windowSum - gems[left];
                left++;

                if (windowSum <= value) {
                    // 如果丢弃l宝石后，总和不超过拥有的钱，则继续纳入r后面的宝石
                    right++;
                    continue outer;
                }
            }

            // 如果把 l ~ r - 1 范围宝石都丢弃了，
            // 总和任然超过拥有的钱，那么就r宝石的价值就超过了手中的钱，此时双指针范围内不能包含r位置
            right++;
            left = right;
            windowSum = 0;
        }
    }

    // 最后收个尾
    if (windowSum <= value) {
        res = Math.max(res, gems.length - 1 - left + 1);
    }

    return res;
};

const gems = [6, 1, 3, 1, 8, 9, 3, 2, 4];
const value = 15;

const res = getResult(gems, value);
console.log('res: ', res);
