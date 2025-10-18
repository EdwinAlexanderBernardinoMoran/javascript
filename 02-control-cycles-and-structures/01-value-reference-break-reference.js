// Todos los valores primitivos (number, string, boolean, null, undefined, symbol, bigint) se pasan por valor.
let a = 10
let b = a;

a = 30;

console.log({ a, b });


// Los objetos (arrays, funciones, objetos literales, etc.) se pasan por referencia.
let juan = { name: 'Juan' };
let ana = juan;

ana.name = 'Ana';

console.log({ juan, ana });


// Rompiendo la referencia
let peter = { name: 'Peter' };
let mary = { ...peter }; // Spread operator

mary.name = 'Mary';

console.log({ peter, mary });


const updateName = ({ ...person }) => {
    person.name = 'Peter Parker';
    return person;
}

let peterParker = { name: 'Spiderman' };
let spiderman = updateName(peterParker);

console.log({ peterParker, spiderman });


// Arreglos

const fruits = ['Apple', 'Banana', 'Orange'];
const fruits2 = fruits; // Referencia
const fruits3 = [...fruits]; // Copia
const fruits4 = fruits.slice(); // Copia

fruits2.push('Mango');

console.table({ fruits, fruits2, fruits3, fruits4 });
