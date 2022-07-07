function extendPrototype(proto){
    proto.prototype.species = 'Human';
    proto.prototype.toSpeciesString = function(){
        return `I am a ${this.species}. ${this.toString()}`;
    }
}

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.toString = function(){
    return `To string method from prototype fo ${this.name}`;
}

extendPrototype(Person);

const p = new Person('Peter', 34);
console.log(p.toSpeciesString());