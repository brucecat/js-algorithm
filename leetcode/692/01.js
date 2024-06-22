var topKFrequent = function (words, k) {
    var obj = {}, arr = [];
    for (var i = 0; i < words.length; i++) {
        if (obj[words[i]]) {
            obj[words[i]]++;
        }
        else {
            obj[words[i]] = 1;
        }
    }
    var keys = Object.keys(obj).sort(function (a, b) { return obj[b] - obj[a]; });
    var vals = keys.map(function (m) { return obj[m]; });
    new Set(vals).forEach(function (m) {
        var mr = keys.filter(function (n) { return m === obj[n]; });
        if (mr.length > 1)
            mr.sort();
        arr = arr.concat(mr);
    });
    return arr.slice(0, k);
};
