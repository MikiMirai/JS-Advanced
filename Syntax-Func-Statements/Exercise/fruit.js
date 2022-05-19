function fruits(fruit, b, c)
{
    let sum=(b*c)/1000;
    let weight=b/1000;
    console.log(`I need $${sum.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
};

fruits('orange', 2500, 1.80);