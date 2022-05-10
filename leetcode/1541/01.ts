function minInsertions(s: string): number {
    let res = 0
    let need = 0   // 记录右括号的需求量
    let leftBracket = new Set(["(", "[", "{"])



    // 遍历字符串
    for (let i = 0; i < s.length; i++) {
        if (leftBracket.has(s[i])) {
            // 是左括号
            // 对右括号的需求+2
            need += 2

            // 若右括号需求数为奇数，需要再插入一个右括号
            if (need % 2 == 1) {
                // 插入一个左括号，
                // need += 1  => need --
                res++
                need--
            }
        } else {
            // 是右括号
            // 对右括号的需求-1
            need--

            if (need == -1) {
                // 右括号多出1个，需要插入1个左括号和1个右括号
                need = 1
                res++
            }
        }
    }

    return res + need
};




// function minAddToMakeValid(s: string): number {
//     let res = 0
//     let need = 0   // 记录右括号的需求量
//     let leftBracket = new Set(["(", "[", "{"])

//     // 右括号需要寻找的另一半
//     let rightToLeft = {
//         ")": "(",
//         "]": "[",
//         "}": "{"
//     }

//     // 遍历字符串
//     for (let i = 0; i < s.length; i++) {

//         if (leftBracket.has(s[i])) {
//             // 放入的是左括号
//             // 对右括号的需求+1
//             need++
//         } else {
//             // 放入的是右括号
//             // 对左括号的需求-1
//             need--

//             if (need == -1) {
//                 // 右括号多出来了，需要插入左括号
//                 need = 0
//                 res++
//             }
//         }
//     }

//     return res + need
// };