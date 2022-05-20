const myArr = [1, 2, 3, 4, 5, 6];

function isEven(element){
    return element % 2 === 0;
}

//Returns true if even 1 element passes the function. "Any" method in C#.
console.log(myArr.some(isEven)); // True
console.log(myArr.some(x => x > 9)); //False

//Returns ALL elements that pass the function.
console.log(myArr.filter(isEven)); // Array with elements - [2, 4, 6]

//Returns element value if even 1 element passes the function.
console.log(myArr.find(isEven)); // Passing element - 2