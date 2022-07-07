function sort(myArr, method){
    if (method === 'asc') {
        myArr.sort((a, b) => a - b);
    } else {
        myArr.sort((a, b) => b - a);
    }

    return myArr;
}

console.log(sort([14, 7, 17, 6, 8], 'asc'));
console.log(sort([14, 7, 17, 6, 8], 'desc'));