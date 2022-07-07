function robot(string) {
    let protein = 0;
    let carbohydrate = 0;
    let fat = 0;
    let flavour = 0;

    return function chef() {
        if (string == undefined) {
            return;
        }

        let tokens = string.split(' ');
        let command = tokens[0];

        if (command == 'report') {
            return (`protein=${protein} carbohydrate=${carbohydrate} fat=${fat} flavour=${flavour}`);
        }

        if (tokens.length > 1) {
            let ingredient = tokens[1];
            let amount = Number(tokens[2]);

            switch (command) {
                case 'restock':
                    switch (ingredient) {
                        case 'flavour':
                            flavour += amount;
                            return ('Success');
                        case 'fat':
                            fat += amount;
                            return ('Success');
                        case 'carbohydrate':
                            carbohydrate += amount;
                            return ('Success');
                        case 'protein':
                            protein += amount;
                            return ('Success');

                        default:
                            break;
                    }
                    break;

                case 'prepare':
                    switch (ingredient) {
                        case 'apple':
                            if (carbohydrate >= 1 && flavour >= 2) {
                                carbohydrate -= 1;
                                flavour -= 2;
                                return ('Success');
                            }
                            else if (carbohydrate < 1) {
                                return ('Error: not enough carbohydrate in stock');
                            }
                            else {
                                return ('Error: not enough flavour in stock');
                            }

                        case 'lemonade':
                            if (carbohydrate >= 10 && flavour >= 20) {
                                carbohydrate -= 10;
                                flavour -= 20;
                                return ('Success');
                            }
                            else if (carbohydrate < 10) {
                                return ('Error: not enough carbohydrate in stock');
                            }
                            else {
                                return ('Error: not enough flavour in stock');
                            }

                        case 'burger':
                            if (carbohydrate >= 5 && fat >= 7 && flavour >= 3) {
                                carbohydrate -= 5;
                                fat -= 7;
                                flavour -= 3;
                                return ('Success');
                            }
                            else if (carbohydrate < 5) {
                                return ('Error: not enough carbohydrate in stock');
                            }
                            else if (fat < 7) {
                                return ('Error: not enough fat in stock');
                            }
                            else {
                                return ('Error: not enough flavour in stock');
                            }

                        case 'eggs':
                            if (protein >= 5 && fat >= 1 && flavour >= 1) {
                                protein -= 5;
                                fat -= 1;
                                flavour -= 1;
                                return ('Success');
                            }
                            else if (carbohydrate < 5) {
                                return ('Error: not enough carbohydrate in stock');
                            }
                            else if (fat < 1) {
                                return ('Error: not enough fat in stock');
                            }
                            else {
                                return ('Error: not enough flavour in stock');
                            }

                        case 'turkey':
                            if (protein >= 10 && carbohydrate >= 10 && fat >= 10 && flavour >= 10) {
                                protein -= 10;
                                carbohydrate -= 10;
                                fat -= 10;
                                flavour -= 10;
                                return ('Success');
                            }
                            else if (protein < 10) {
                                return ('Error: not enough protein in stock');
                            }
                            else if (carbohydrate < 10) {
                                return ('Error: not enough carbohydrate in stock');
                            }
                            else if (fat < 10) {
                                return ('Error: not enough fat in stock');
                            }
                            else {
                                return ('Error: not enough flavour in stock');
                            }

                        default:
                            break;
                    }
                    break;

                default:
                    break;
            }
        }
    }
}

let manager = chef();
console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));
