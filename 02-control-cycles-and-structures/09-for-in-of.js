let heroes = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America'];

console.log('---- For ----');
for (let i = 0; i < heroes.length; i++) {
    console.log(i, heroes[i]);
}

console.log('---- For in ----');
for (let i in heroes) {
    console.log(i, heroes[i]);
}

console.log('---- For of ----');
for (let hero of heroes) {
    console.log(hero);
}