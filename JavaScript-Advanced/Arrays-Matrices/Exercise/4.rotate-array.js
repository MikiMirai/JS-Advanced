function arrayRotate(myArr, turns) {
    for (let index = 0; index < turns; index++) {
        myArr.unshift(myArr.pop());
    }
    console.log(myArr.join(' '));
}

arrayRotate(['1',
    '2',
    '3',
    '4'],
    2
);
arrayRotate(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
);