class Person{

    name;
    age;

    constructor(name, age){

        if (!name) throw Error("Name is required");
        this.name = name;
        this.age = age;
    }

    whoAmI(){
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

const spiderMan = new Person("Peter Parker", 25);
const iroMan = new Person("Tony Stark", 48);
console.log(spiderMan);
console.log(iroMan);

spiderMan.whoAmI();
iroMan.whoAmI();
