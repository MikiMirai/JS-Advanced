const myArr = [10, 20, 30, 40, 50, 60];

//-Stack-
//Makes the Array a Stack and adds the element at the end, displaying the index of the new element.
console.log(myArr.push(70));
console.log(myArr);

//Removes and displays the last element.
console.log(myArr.pop());
console.log(myArr);

//-Queue-
//Makes the Array a Queue and removes the 1st element, displaying the element.
console.log(myArr.shift());
console.log(myArr);

//Inserts the elements in the start of the Queue, displaying the length of the Array.
console.log(myArr.unshift(10));
console.log(myArr);