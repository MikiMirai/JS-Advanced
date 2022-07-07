function calories(myArr){
    let obj = {};

    for (let i = 0; i < myArr.length; i += 2){
        let product = myArr[i];
        let calories = myArr[i +1];
        obj[product] = Number(calories);
    }

    console.log(obj);
}

calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calories(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);