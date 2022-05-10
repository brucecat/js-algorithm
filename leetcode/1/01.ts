function twoSum(nums: number[], target: number): number[] {
    let map: Map<number, number> = new Map()
    for (let i = 0; i < nums.length; i++) {
        let tmpTarget = target - nums[i]
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i]
        }
        map.set(tmpTarget, i)
    }
    return []
};