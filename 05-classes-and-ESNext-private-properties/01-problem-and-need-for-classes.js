const edwin = {
    name: "Edwin",
    age: 30,
    job: "Developer",
    printInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Job: ${this.job}`);
    }
}

const maria = {
    name: "Maria",
    age: 25,
    job: "Designer",
    printInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Job: ${this.job}`);
    }
}

// This must be created with the reserved word new.
function Person(name, age) {
    console.log("executed");
    this.name = name;
    this.age = age;
    
    this.printInfo = function() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const pedro = new Person("Pedro", 28);
const lucia = new Person("Lucia", 32);

pedro.printInfo();
lucia.printInfo();