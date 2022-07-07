class List {
    constructor() {
        this.arr = []
        this.size = this.arr.length;
    }

    add(element) {
        this.arr.push(element)
        this.arr = this.arr.sort((a, b) => a - b)
        this.size = this.arr.length;
    }

    remove(index) {
        if (index >= 0 && index < this.arr.length) {
            this.arr.splice(index, 1);
            this.size = this.arr.length;
        } else {
            throw new Error('Invalid index!');
        }
    }

    get(index) {
        if (index >= 0 && index < this.arr.length) {
            return this.arr[index];
        } else {
            throw new Error('Invalid index!');
        }
    }
}