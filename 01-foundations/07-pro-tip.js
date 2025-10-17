function createPerson(name, age) {
    return { name, age };
}

// ARROW FUNCTION

// Arrow function, los parentesis indicann que retornamos todo lo que esta dentro de los parentesis como un objeto.
const createPersonArrow = (lastName, age) => ({ lastName, age });


// ARGUMENTS OBJECT
function printArguments() {
    console.log(arguments);
}

// printArguments(10, true, "Hola", "Otro argumento");
// Las funciones de flecha no maneja o no crear este obj de 'arguments' es algo que solo tienen los obj tradicionales.
const printArgumentsArrow = () => {
    console.log(arguments);
}

const printArgumentsArroTwo = (...args) => {
    console.log(args);
}

// Despues de la edad todos lo argumentos se guardan en args como un arreglo.
// Despues del parametro `...(Arguments)` no puede haber mas parametros.

const printArgumentsArroThree = (age, ...args) => {
    console.log({age, args});

    return args
}

const argumentsArray = printArgumentsArroThree(10, true, "Edwin", "Hola");


// DESESTERUCTURACION DE ARREGLOS
const [married, live, namePerson, greet] = printArgumentsArroThree(10, true, "Edwin", "Hola");

console.log({argumentsArray});
console.log({married, live, namePerson, greet});

const { lastName } = createPersonArrow("Edwin", 23);
const { lastName: newLastName } = createPersonArrow("Edwin", 23);

console.log({ lastName });
console.log({ newLastName });

// DESTRUCTURACION DE ARGUMENTOS
const person = {
    name: "Tony Stark",
    codeName: "Ironman",
    live: true,
    age: 45,
    suits: ["Mark I", "Mark V", "Hulkbuster"],
}

const printProperties = ({ name, codeName, live, age = 0, suits }) => {
    console.log({ name });
    console.log({ codeName });
    console.log({ live });
    console.log({ age });
    console.log({ suits });
}

printProperties(person);