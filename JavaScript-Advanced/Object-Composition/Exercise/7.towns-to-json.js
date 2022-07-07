function toJSON(towns) {
    let result = [];
    class Town {
        constructor(town, latitude, longitude) {
            this.Town = town;
            this.Latitude = Number(latitude);
            this.Longitude = Number(longitude);
        }
    }

    for (let index = 1; index < towns.length; index++) {
        let arr = towns[index].split('|').map(t => t.trim()).filter(x => x.length != 0);
        let townName = arr[0];
        let latitude = Number(arr[1]).toFixed(2);
        let longitude = Number(arr[2]).toFixed(2);
        let town = new Town(townName, latitude, longitude);
        result.push(town);
    }

    return JSON.stringify(result);
}

toJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);