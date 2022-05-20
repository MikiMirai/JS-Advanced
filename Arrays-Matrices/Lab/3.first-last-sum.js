function firstLastSum(numsString){
    let first = numsString.shift();
    let last = numsString.pop();

    const result = Number(first) + Number(last);

    console.log(result);
}

firstLastSum(['20', '30', '40']);
firstLastSum(['5', '10']);