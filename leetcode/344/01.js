/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    var _a;
    var left = 0, right = s.length - 1;
    while (left < right) {
        _a = [s[right], s[left]], s[left] = _a[0], s[right] = _a[1];
        left++;
        right--;
    }
}
;
