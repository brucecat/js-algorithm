function isAlienSorted(words, order) {
    var mp = new Map();
    for (var i = 0; i < order.length; i++) {
        mp.set(order.charAt(i), i);
    }
    for (var _i = 0, _a = words.entries(); _i < _a.length; _i++) {
        var _b = _a[_i], i = _b[0], w = _b[1];
        if (i == words.length - 1) {
            break;
        }
        for (var j = 0; j < w.length; j++) {
            if (j == words[i + 1].length) {
                return false;
            }
            var a = mp.get(w.charAt(j)), b = mp.get(words[i + 1].charAt(j));
            if (a > b) {
                return false;
            }
            else if (a < b) {
                break;
            }
        }
    }
    return true;
}
;
