function delimiter(myArr, delimiter) {
    console.log(myArr.join(delimiter));
}

delimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
);
delimiter(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'
);