const heroes = [
    'Superman',
    'Batman',
    'Wonder Woman',
    'Flash',
    'Green Lantern',
]

const sortedHeroes = heroes.toSorted();
const reverseHeroes = heroes.toReversed();

// Regresa un nuevo array eliminando elementos y el splice muta el array original y regresa los elementos eliminados
const deleteHeroes = heroes.toSpliced(0, 2, 'Green Arrow');

console.table(heroes);
console.table(sortedHeroes);
console.table(reverseHeroes);
console.table({deleteHeroes});