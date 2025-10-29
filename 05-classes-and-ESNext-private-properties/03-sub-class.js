class Person{

    static _count = 0;
    static get count() {
        return `${Person._count} instancias`
    }

    static message() {
        console.log("Hello I am method static");
        
    }

    name = '';
    age = '';
    foot = '';

    constructor(name = 'Sin nombre', age = 0){

        if (!name) throw Error("Name is required");
        this.name = name;
        this.age = age;

        // Cuenta las instancias
        Person._count++
    }

    set setFoodFavorite( food ) {
        this.foot = food.toUpperCase();
    }

    get getFoodFavorite() {
        return `${this.name}'s favorite food is ${this.foot}`;
    }

    whoAmI(){
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

class Heroe extends Person {
    clan = 'Sin  clan';

    constructor(name, age) {
        super(name, age) // Llama al constructor de la clase padre
        this.clan = 'Avengers';
    }

    whoAmI(){
        super.whoAmI(); // Llama al método de la clase padre
        console.log(`I am ${this.name}, ${this.clan}.`);
    }
}

const spiderMan = new Heroe("Peter Parker", 25);
spiderMan.whoAmI()
console.log(spiderMan);
