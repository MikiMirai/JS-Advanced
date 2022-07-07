function everyNthElement(myArr, step) {
    return myArr.filter((element, index) => index % step == 0)
}

console.log(everyNthElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2
));
console.log(everyNthElement(['dsa',
    'asd',
    'test',
    'tset'],
    2
));
console.log(everyNthElement(['1',
    '2',
    '3',
    '4',
    '5'],
    6
));