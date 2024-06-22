var MAX = 1e5 + 9;
function findClosest(words, word1, word2) {
    var ans = MAX, idx1 = MAX, idx2 = -MAX;
    for (var _i = 0, _a = words.entries(); _i < _a.length; _i++) {
        var _b = _a[_i], i = _b[0], word = _b[1];
        if (word === word1) {
            idx1 = i;
        }
        else if (word === word2) {
            idx2 = i;
        }
        ans = Math.min(ans, Math.abs(idx1 - idx2));
    }
    return ans;
}
;
