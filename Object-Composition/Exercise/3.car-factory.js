function makeCar(car) {
    let engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    let carriages = [{ type: 'hatchback', color: car.color }, { type: 'hatchback', color: car.color }];
    let wheelsize = car.wheelsize % 2 == 1 ? car.wheelsize : car.wheelsize - 1;

    return {
        model: car.model,
        engine: engines.filter(e => e.power >= car.power)[0],
        carriage: carriages.filter(c => c.type == car.carriage)[0],
        wheels: [wheelsize, wheelsize, wheelsize, wheelsize]
    };
}

console.log(makeCar({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));