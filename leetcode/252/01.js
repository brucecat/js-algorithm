function minMeetingRooms(intervals) {
    // 先考虑特殊情况
    if (intervals == null || intervals.length == 0)
        return 0;
    if (intervals.length == 1)
        return 1;
    // 从定义排序按照进入时间排序
    intervals.sort(function (v1, v2) { return (v1[0] - v2[0]); });
    // 定义一个优先队列
    var heap = new PriorityQueue();
    // 一个计数器
    var meetingCount = 0;
    for (var _i = 0, intervals_1 = intervals; _i < intervals_1.length; _i++) {
        var meeting = intervals_1[_i];
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
function bestArrange(intervals) {
    // 先考虑特殊情况
    if (intervals == null || intervals.length == 0)
        return 0;
    if (intervals.length == 1)
        return 1;
    // 从定义排序按照进入时间排序
    intervals.sort(function (v1, v2) { return (v1[1] - v2[1]); });
    var timeLine = 0;
    var result = 0;
    // 依次遍历每一个会议，结束时间早的会议先遍历
    for (var i = 0; i < intervals.length; i++) {
        if (timeLine <= intervals[i][0]) {
            result++;
            timeLine = intervals[i][1];
        }
    }
    return result;
}