function oneEditAway(first, second) {
    var m = first.length, n = second.length;
    if (Math.abs(m - n) > 1) {
        return false;
    }
    for (var i = 0; i < Math.min(m, n); i++) {
        if (first[i] != second[i]) {
            var flag1 = first.slice(i + 1) == second.slice(i + 1);
            var flag2 = first.slice(i) == second.slice(i + 1);
            var flag3 = first.slice(i + 1) == second.slice(i);
            return flag1 || flag2 || flag3;
        }
    }
    return true;
}
;
