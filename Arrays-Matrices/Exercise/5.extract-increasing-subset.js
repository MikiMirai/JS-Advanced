function increasingSubset(myArr) {
    let result = [];
    let biggest = myArr[0];
    for (let index = 0; index < myArr.length; index++) {
        let currentNum = myArr[index];
        if (currentNum >= biggest) {
            result.push(currentNum);
            biggest = currentNum;
        }
    }
    return result;
}

console.log(increasingSubset([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));
console.log(increasingSubset([20,
    3,
    2,
    15,
    6,
    1]
));