class Person {
    static forObject({ name, lastname, country}) {
        return new Person(name, lastname, country);
    }

    constructor(name, lastname, country) {
        this.name = name;
        this.lastname = lastname;
        this.country = country;
    }

    getInfo() {
        console.log(`info: ${this.name}, ${this.lastname}, ${this.country}`);
    }
}

const name = 'Edwin',
    lastname = 'Diaz',
    country = 'Colombia';

const edwin = {
    name: 'Edwin',
    lastname: 'Bernardino',
    country: 'El Salvador'
}


const personOne = new Person(name, lastname, country);
const personTwo = Person.forObject(edwin);

personOne.getInfo();
personTwo.getInfo();