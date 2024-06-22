var inorderSuccessor = function (root, p) {
    var successor = null;
    if (p.right) {
        successor = p.right;
        while (successor.left) {
            successor = successor.left;
        }
        return successor;
    }
    var node = root;
    while (node) {
        if (node.val > p.val) {
            successor = node;
            node = node.left;
        }
        else {
            node = node.right;
        }
    }
    return successor;
};
