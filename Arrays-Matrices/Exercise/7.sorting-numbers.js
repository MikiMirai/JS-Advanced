function sortNumbers(myArr){
    let result = [];
    myArr.sort((a, b) => b - a);
    while(myArr.length !== 0){
        result.push(myArr.pop());
        result.push(myArr.shift());
    }
    return result;
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);