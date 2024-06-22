var level = 10;
var TNode = /** @class */ (function () {
    function TNode(_val) {
        this.ne = new Array(level);
        this.val = _val;
    }
    return TNode;
}());
var Skiplist = /** @class */ (function () {
    function Skiplist() {
        this.he = new TNode(-1);
    }
    Skiplist.prototype.find = function (t, ns) {
        var cur = this.he;
        for (var i = level - 1; i >= 0; i--) {
            while (cur.ne[i] != null && cur.ne[i].val < t)
                cur = cur.ne[i];
            ns[i] = cur;
        }
    };
    Skiplist.prototype.search = function (t) {
        var ns = new Array(level);
        this.find(t, ns);
        return ns[0].ne[0] != null && ns[0].ne[0].val == t;
    };
    Skiplist.prototype.add = function (t) {
        var ns = new Array(level);
        this.find(t, ns);
        var node = new TNode(t);
        for (var i = 0; i < level; i++) {
            node.ne[i] = ns[i].ne[i];
            ns[i].ne[i] = node;
            if (Math.round(Math.random()) == 0)
                break;
        }
    };
    Skiplist.prototype.erase = function (t) {
        var ns = new Array(level);
        this.find(t, ns);
        var node = ns[0].ne[0];
        if (node == null || node.val != t)
            return false;
        for (var i = 0; i < level && ns[i].ne[i] == node; i++)
            ns[i].ne[i] = ns[i].ne[i].ne[i];
        return true;
    };
    return Skiplist;
}());
