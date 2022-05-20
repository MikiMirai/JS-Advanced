const myArr = [10, 20, 30, 40, 50, 60];

//Iterate over Array with given function over every element and return a new Array.
const result = myArr.reduce(reducer, 0);

console.log(result);

//Function to give to reduce.
function reducer(accumulator, value){
    console.log('acc:', accumulator, '+val:', value);
    return accumulator + value;
}