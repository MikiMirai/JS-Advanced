const myArr = [10, 20, 30, 40, 50, 60];

//Removes 2 elements from index 1 and displays them to the console.
console.log(myArr.splice(1, 2));
console.log(myArr);

//Deletes 0 elements and adds the elements(20 and 30) after index 1.
console.log(myArr.splice(1, 0, 20, 30));
console.log(myArr);

//Deletes 4 elements, displays them and adds 25 after index 1.
console.log(myArr.splice(1, 4, 25));
console.log(myArr);

//If an array needs to be added at specific index.
console.log(myArr.splice(2, 0, ...[30, 40, 50]));
console.log(myArr);