// let s: string[] = new Array()
// let left = 0, right = 0;
// while (right < s.length) {
//     // 增大窗口
//     window.add(s[right])
//     right ++;
//     while(window needs shrink){
//         // 缩小窗口
//         window.remove(s[left])
//         left++
//     }
// }
function slidingWindow(s, t) {
    var need = {}, window = {};
    for (var i = 0; i < t.length; i++) {
        var c = t[i];
        if (need.hasOwnProperty(c)) {
            need[c] += 1;
        }
        else {
            need[c] = 0;
        }
    }
    var left = 0, right = 0;
    var valid = 0;
    while (right < s.length) {
        // c是将要移入窗口的字符
        var c = s[right];
        // 右移窗口
        right++;
        // 进行窗口内数据的一系列更新
        // ...
        // debug 输出的位置
        console.log("window: ", left, right);
        // 判断左窗口是否需要收缩
        // window needs shrink
        while (window)
            needs;
        shrink;
        {
            var d = s[left];
            // 左移窗口
            left++;
            // 进行窗口内数据的一系列更新
        }
    }
}
