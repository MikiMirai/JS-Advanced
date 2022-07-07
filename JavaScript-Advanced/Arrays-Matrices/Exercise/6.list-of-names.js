function sortNames(myArr){
    myArr.sort((a, b) => a.localeCompare(b));
    for (let index = 0; index < myArr.length; index++){
        console.log(`${index + 1}.${myArr[index]}`);
    }
}

sortNames(["John", "Bob", "Christina", "Ema"]);