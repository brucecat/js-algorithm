var topKFrequent = function (words, k) {
    var obj = {},
        arr = [];
    for (var i = 0; i < words.length; i++) {
        if (obj[words[i]]) {
            obj[words[i]]++;
        } else {
            obj[words[i]] = 1;
        }
    }
    let keys = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
    let vals = keys.map((m) => obj[m]);
    new Set(vals).forEach((m) => {
        let mr = keys.filter((n) => m === obj[n]);
        if (mr.length > 1) mr.sort();
        arr = arr.concat(mr);
    });
    return arr.slice(0, k);
};
