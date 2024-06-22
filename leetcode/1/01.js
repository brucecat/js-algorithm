function twoSum(nums, target) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        var tmpTarget = target - nums[i];
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i];
        }
        map.set(tmpTarget, i);
    }
    return [];
}
;
