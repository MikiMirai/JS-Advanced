//Sorting numeracally
const myArr = [1, 2, 3, 6, 5, 4];

//Sort the Array using function.
myArr.sort(compare);
console.log(myArr);

//Using a function
function compare(a, b){
    return b - a;
}

//Sort using lambda.
myArr.sort((a, b) => a - b);
console.log(myArr);

//Sorting alphabetically
const myArrLetters = ['alpha', 'color', 'beta']

//Sort alphabetically using compare.
myArrLetters.sort((a, b) => a.localeCompare(b));

console.log(myArrLetters);