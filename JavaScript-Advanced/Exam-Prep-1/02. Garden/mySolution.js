class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.");
        }
        else {
            this.plants.push({ plantName: plantName, spaceRequired: spaceRequired, ripe: false, quantity: 0 });
            this.spaceAvailable -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`
        }
    }

    ripenPlant(plantName, quantity) {
        let found = this.plants.find(x => x.plantName == plantName);
        if (found == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (found.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }
        found.ripe = true;
        found.quantity = quantity;
        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        }
        else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }

    harvestPlant(plantName) {
        let found = this.plants.find(x => x.plantName == plantName);
        if (found == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (!found.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        this.spaceAvailable += found.spaceRequired;
        this.storage.push({ plantName: found.plantName, quantity: found.quantity });
        this.plants = this.plants.filter((x) => x.plantName != plantName);
        return `The ${plantName} has been successfully harvested.`
    }

    generateReport() {
        let toReturn = `The garden has ${this.spaceAvailable} free space left.\n`;
        toReturn += `Plants in the garden: ${this.plants
            .sort((a, b) => a.plantName.localeCompare(b.plantName))
            .map((x) => x.plantName)
            .join(", ")}\n`;

        toReturn += `Plants in storage: `;
        if (this.storage.length === 0) {
            toReturn += "The storage is empty.";
        }
        else {
            let stringsToAdd = [];
            for (let p of this.storage) {
                stringsToAdd.push(`${p.plantName} (${p.quantity})`);
            }

            toReturn += stringsToAdd.join(", ");
        }
        return toReturn;
    }
}