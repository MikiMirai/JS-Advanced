function evenPosElements(input){
    let result = '';

    for (let i = 0; i < input.length; i += 2){
        result += input[i] + ' ';
    }

    console.log(result);
}

evenPosElements(['20', '30', '40', '50', '60']);
evenPosElements(['5', '10']);