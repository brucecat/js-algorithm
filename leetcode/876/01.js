function middleNode(head) {
    var _a;
    var slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
        fast = (_a = fast.next) === null || _a === void 0 ? void 0 : _a.next;
        slow = slow.next;
    }
    return slow;
}
;
