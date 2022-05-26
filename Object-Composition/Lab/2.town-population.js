function towns(list){
    const result = {};

    for (const  town of list){
        const tokens = town.split(' <-> ');
        const name = tokens[0];
        const population = Number(tokens[1]);

        result[name] = population;
    }

    console.log(result);
}