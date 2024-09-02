// 1.	无重复字符的最长子串：给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
// 比如提供abaabcaa，最长不重复子串是3，比如aaa是1，提供awwabw是3

const getResult = (str)=>{
  let left = 0;
  let right = 0;

  // 最终结果
  let res = 0

  const window = {}

  while(right < str.length){

    // 要滑入窗口的值
    const inChart = str[right]
    right++

    // 维护窗口信息
    if(window[inChart]){
      window[inChart]++
    } else {
      window[inChart] = 1
    }

    // 如果有重复字符
    while(window[inChart] > 1){
      // 收缩窗口
      const outChar = str[left]
      left++

      // 维护窗口信息
      window[outChar]--
    }

    res = Math.max(res, right - left)
  }

  return res
}


const a = 'awwabw'
const res = getResult(a)
console.log('res: ', res);