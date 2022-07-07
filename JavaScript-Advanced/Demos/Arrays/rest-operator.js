const myArr = [10, 20, 30, 40, 50, 60];

//Display element 0 and 1 and the rest put in another array.
const [a, b, ...elements] = myArr;

//Display the 2 grabbed elements and the new array as array.
console.log(a, b, elements);

//Display only the new array.
console.log(...elements);