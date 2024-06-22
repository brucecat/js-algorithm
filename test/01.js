const isEqual = (a, b) => {
    return a.name === b.name;
};

const myArray = [{ name: 1 }, { name: 1 }, { name: 2 }, { name: 3 }];

const result = myArray.reduce((total, cur, index) => {
    if (!total.some((item) => isEqual(item, cur))) {
        total.push(cur);
    }
    return total;
}, []);

console.log(result);
