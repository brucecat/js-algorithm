
class Solution {
    class Node {
        // ls 和 rs 分别代表当前区间的左右子节点所在 tr 数组中的下标
        // val 代表当前区间的最大高度，add 为懒标记
        int ls, rs, val, add;
    }
    int N = (int)1e9, cnt = 0;
    Node[] tr = new Node[1000010];
    void update(int u, int lc, int rc, int l, int r, int v) {
        if (l <= lc && rc <= r) {
            tr[u].val = v;
            tr[u].add = v;
            return ;
        }
        pushdown(u);
        int mid = lc + rc >> 1;
        if (l <= mid) update(tr[u].ls, lc, mid, l, r, v);
        if (r > mid) update(tr[u].rs, mid + 1, rc, l, r, v);
        pushup(u);
    }
    int query(int u, int lc, int rc, int l, int r) {
        if (l <= lc && rc <= r) return tr[u].val;
        pushdown(u);
        int mid = lc + rc >> 1, ans = 0;
        if (l <= mid) ans = query(tr[u].ls, lc, mid, l, r);
        if (r > mid) ans = Math.max(ans, query(tr[u].rs, mid + 1, rc, l, r));
        return ans;
    }
    void pushdown(int u) {
        if (tr[u] == null) tr[u] = new Node();
        if (tr[u].ls == 0) {
            tr[u].ls = ++cnt;
            tr[tr[u].ls] = new Node();
        }
        if (tr[u].rs == 0) {
            tr[u].rs = ++cnt;
            tr[tr[u].rs] = new Node();
        }
        if (tr[u].add == 0) return ;
        int add = tr[u].add;
        tr[tr[u].ls].add = add; tr[tr[u].rs].add = add;
        tr[tr[u].ls].val = add; tr[tr[u].rs].val = add;
        tr[u].add = 0;
    }
    void pushup(int u) {
        tr[u].val = Math.max(tr[tr[u].ls].val, tr[tr[u].rs].val);
    }
    public List<Integer> fallingSquares(int[][] ps) {
        List<Integer> ans = new ArrayList<>();
        tr[1] = new Node();
        for (int[] info : ps) {
            int x = info[0], h = info[1], cur = query(1, 1, N, x, x + h - 1);
            update(1, 1, N, x, x + h - 1, cur + h);
            ans.add(tr[1].val);
        }
        return ans;
    }
}

 