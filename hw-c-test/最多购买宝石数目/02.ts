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


};

const gems = [6, 1, 3, 1, 8, 9, 3, 2, 4];
const value = 15;

const res = getResult(gems, value);
console.log('res: ', res);
