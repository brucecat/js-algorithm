function arrayRankTransform(arr) {
    var clone = arr.concat();
    clone.sort(function (a, b) { return a - b; });
    var index = 0;
    var map = new Map();
    for (var _i = 0, clone_1 = clone; _i < clone_1.length; _i++) {
        var i = clone_1[_i];
        if (!map.has(i)) {
            index += 1;
            map.set(i, index);
        }
    }
    // 得出答案
    var ans = new Array();
    for (var i = 0; i < arr.length; i++) {
        ans.push(map.get(arr[i]));
    }
    return ans;
}
