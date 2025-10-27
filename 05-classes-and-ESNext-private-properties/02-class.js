class Person{

    name;
    age;

    constructor(name, age){

        if (!name) throw Error("Name is required");
        this.name = name;
        this.age = age;
    }
}

const spiderMan = new Person("Peter Parker", 25);
const iroMan = new Person("Tony Stark", 48);
console.log(spiderMan);
console.log(iroMan);
