function getFact(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

const getResult = (str) => {
    const charMap = {};
    for (let c of str) {
        charMap[c] = charMap[c] ? charMap[c] + 1 : 1;
    }

    let res = getFact(str.length)

    Object.values(charMap).forEach(repeat=>{
      res = res / getFact(repeat)
    })

    return res
};

const t1 = 'ABCDEFGHHA';

const res = getResult(t1);
console.log('res: ', res);
