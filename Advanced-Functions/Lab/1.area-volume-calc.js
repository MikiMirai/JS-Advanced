function areaVol(area, volume, input){
    let data = JSON.parse(input);
    let result = [];

    for (const cube of data) {
        const current = {
            area: area.call(cube),
            volume: volume.call(cube)
        };

        result.push(current);
    }

    return result;
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};