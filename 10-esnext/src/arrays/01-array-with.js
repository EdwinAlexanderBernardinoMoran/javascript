const superHeroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
    },
    {
        id: 3,
        name: 'Flash',
    },
    {
        id: 4,
        name: 'Green Lantern',
    }
]

// Esta forma crea una copia superficial (shallow copy) del array porque en realidad se siguen pasando por referencia, funciona si solo tenemos primitivos entonces es valido.

// const superHeroesCopy = [...superHeroes];

// Esta funcion nos permite romper la referencia y crear una copia profunda (deep copy) del array de objetos.
const superHeroesCopy = structuredClone(superHeroes);

superHeroesCopy[0].name = 'Wonder Woman';

console.table(superHeroes);
console.table(superHeroesCopy);