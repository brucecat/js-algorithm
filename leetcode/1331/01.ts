function arrayRankTransform(arr: number[]): number[] {
    const clone: Array<number> = arr.concat();

    clone.sort((a, b) => a - b);

    let index = 0;
    const map: Map<number, number> = new Map();

    for (const i of clone) {
        if (!map.has(i)) {
            index += 1;
            map.set(i, index);
        }
    }

    // 得出答案
    const ans = new Array<number>();
    for (let i = 0; i < arr.length; i++) {
        ans.push(map.get(arr[i]));
    }
    return ans;
}
