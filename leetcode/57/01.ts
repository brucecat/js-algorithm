function insert(intervals: number[][], newInterval: number[]): number[][] {
    if (intervals.length === 0) {
        return [newInterval];
    }

    // 先把newInterval放到对应的位置上
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] > newInterval[0]) {
            // 插入到第i项位置
            intervals.splice(i, 0, newInterval);

            break;
        } else if (intervals[i][0] === newInterval[0]) {
            // 插入到第i项位置
            if (intervals[i][1] >= newInterval[1]) {
                intervals.splice(i, 0, newInterval);
            }

            // 插入到第i + 1项位置
            if (intervals[i][1] < newInterval[1]) {
                intervals.splice(i + 1, 0, newInterval);
            }

            break;
        }

        // 找到最后了，仍未找到插入位置，说明是最大的
        if (i === intervals.length - 1) {
            // 往后插入
            intervals.push(newInterval);
        }
    }

    console.log(11111, intervals);

    // 然后合并有交集的区间
    let curIntervalIndex = 0;
    while (curIntervalIndex + 1 < intervals.length) {
        const curInterval = intervals[curIntervalIndex];
        const nextInterval = intervals[curIntervalIndex + 1];

        // 前面区间的结束值大于等于后面区间的开始值
        if (curInterval[1] >= nextInterval[0]) {
            // 前面结束值大于后面的结束值（全包围）
            if (curInterval[1] > nextInterval[1]) {
                // 直接删掉后一个区间
                intervals.splice(curIntervalIndex + 1, 1);
            } else if (curInterval[1] <= nextInterval[1]) {
                // 前面结束值小于等于后面的结束值（半包围）
                // 吞并
                curInterval[1] = nextInterval[1];

                // 删掉后面一个区间
                intervals.splice(curIntervalIndex + 1, 1);
            } else {
                curIntervalIndex++;
            }
        } else {
            curIntervalIndex++;
        }
    }

    return intervals;
}

// const intervals = [
//     [1, 2],
//     [3, 5],
//     [6, 7],
//     [8, 10],
//     [12, 16],
// ];
// const newInterval = [4, 8];

// const intervals = [];

// const newInterval = [5, 7];

const intervals = [[1, 5]];

const newInterval = [2, 7];

const res1 = insert(intervals, newInterval);
console.log('res1: ', res1);
