function shuffle(arr) {
    var _a;
    if (arr === void 0) { arr = []; }
    for (var j = arr.length - 1; j >= 0; j--) {
        var randomIndex = Math.floor(Math.random() * j + 1);
        _a = [arr[randomIndex], arr[j]], arr[j] = _a[0], arr[randomIndex] = _a[1];
    }
    return arr;
}
console.log(shuffle([1, 2, 3, 4, 5]));
