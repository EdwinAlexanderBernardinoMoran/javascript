class Person{

    static _count = 0;
    static get count() {
        return `${Person._count} instancias`
    }

    static message() {
        console.log("Hello I am method static");
        
    }

    name;
    age;
    foot;

    constructor(name, age){

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

const spiderMan = new Person("Peter Parker", 25);
const iroMan = new Person("Tony Stark", 48);

spiderMan.setFoodFavorite = "Pizza";

// Esta propiedad no existe en la clase Person y se puede agregar ( no es algo bueno)
spiderMan.nemesis = "Green Goblin";

console.log(spiderMan);
console.log(spiderMan.getFoodFavorite);

console.log(iroMan);

spiderMan.whoAmI();
iroMan.whoAmI();

// Conteo estatico
console.log(`Conteo estatico ${Person._count}`);
console.log(Person.count);
