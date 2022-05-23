function addRemove(myArr) {
    let newArr = [];
    let num = 0;

    for (let index = 0; index < myArr.length; index++) {
        num++;
        let command = myArr[index];
        if (command == 'add') {
            newArr.push(num);
        } else {
            newArr.pop();
        }
    }
    if (newArr.length == 0) {
        console.log('Empty');
    } else {
        console.log(newArr.join('\n'));
    }
}

addRemove(['add',
    'add',
    'add',
    'add']
);
addRemove(['add',
    'add',
    'remove',
    'add',
    'add']
);
addRemove(['remove',
    'remove',
    'remove']
);