function shuffle(arr: number[] = []) {

    for (let j = arr.length - 1; j >= 0; j--) {
        const randomIndex = Math.floor(Math.random() * j + 1); 
        [arr[j], arr[randomIndex]] = [arr[randomIndex], arr[j]]
    }
    return arr;
}

console.log(shuffle([1, 2, 3, 4, 5]));