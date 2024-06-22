function largestTriangleArea(points) {
    var s = 0;
    for (var i = 0; i < points.length; i++) {
        for (var j = i + 1; j < points.length; j++) {
            for (var k = j + 1; k < points.length; k++) {
                var a = Math.sqrt(Math.pow(points[i][0] - points[j][0], 2) + Math.pow(points[i][1] - points[j][1], 2));
                var b = Math.sqrt(Math.pow(points[j][0] - points[k][0], 2) + Math.pow(points[j][1] - points[k][1], 2));
                var c = Math.sqrt(Math.pow(points[k][0] - points[i][0], 2) + Math.pow(points[k][1] - points[i][1], 2));
                if (Math.abs(Math.max(a, b, c) - (a + b + c - Math.max(a, b, c))) < 1e-2)
                    continue;
                s = Math.max(s, helper(a, b, c));
            }
        }
    }
    return s;
}
;
function helper(a, b, c) {
    var p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}
