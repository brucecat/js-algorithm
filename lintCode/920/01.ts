import {
    Interval,
} from '../home/lib/index';
/**
 * Definition of Interval:
 * export class Interval {
 *     start :number;
 *     end :number;
 *     constructor(start :number, end :number) {
 *         this.start = start;
 *         this.end = end;
 *     }
 * }
 */


function minMeetingRooms(intervals: number[][]): number {
    // 先考虑特殊情况
    if (intervals == null || intervals.length == 0)
        return 0;


    // 从定义排序按照进入时间排序
    intervals.sort((v1, v2) => (v1[0] - v2[0]));

    // 定义一个优先队列
    let heap = new PriorityQueue()

    // 一个计数器
    let meetingCount = 0;

    for (let meeting of intervals) {
        // 要是堆非空，
        // 当前会议的开始时间已经大于等于了最小的结束时间
        // 这里就是要把所有已经结束的会议淘汰出去
        while (!heap.isEmpty() && meeting[0] >= heap.back()) {
            heap.dequeue();
        }

        // 再把当前会议的结束时间加进去
        heap.enqueue(meeting[1]); // 堆里有的就是进行的会议的数量

        // 谈话不断的看是不是最大的
        meetingCount = Math.max(meetingCount, heap.size());
    }
    return meetingCount;
}



export class Solution {
    /**
     * @param intervals: an array of meeting time intervals
     * @return: if a person could attend all meetings
     */
    canAttendMeetings(intervals: Interval[]): boolean {
        if (intervals.length <= 1) return true
        return minMeetingRooms(intervals) > 1
    }
}
