function lowestPrices(myArr) {
    let products = {};

    for (let i = 0; i < myArr.length; i++) {
        let tokens = myArr[i];
        let productInfo = tokens.split(' | ');
        let town = productInfo[0];
        let product = productInfo[1];
        let price = Number(productInfo[2]);

        if (!products.hasOwnProperty(product)) {
            products[product] = { town, price };
        } else {
            if (price < products[product].price) {
                products[product] = { town, price };
            }
        }
    }

    let productNames = Object.keys(products);

    for (let i = 0; i < productNames.length; i++) {
        let productName = productNames[i];
        console.log(`${productName} -> ${products[productName].price} (${products[productName].town})`);
    }
}

lowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);