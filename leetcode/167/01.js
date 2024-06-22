function twoSum(numbers, target) {
    var left = 0, right = numbers.length - 1;
    while (left < right) {
        var sum = numbers[left] + numbers[right];
        if (sum == target) {
            return [left + 1, right + 1];
        }
        else if (sum > target) {
            // 让sum小一点
            right--;
        }
        else {
            // 让sum大一点
            left++;
        }
    }
    return [];
}
;
