const largest = (a, b) => ( a > b ) ? a : b;

const hasMembership = ( member) => ( member) ? '2 Dólares': '10 Dólares';

console.log(largest(20, 15));
console.log(hasMembership(true));
console.log(hasMembership(false));

const friend = true;
const friendsArray = ['Peter', 'Tony', 'Dr. Strange', friend ? 'Thor' : 'Loki', (() => 'Hulk')() /* Funcion anonima autoinvocada */, largest(10, 6) ];
console.log(friendsArray);

const nota = 85;
const grado = nota >= 95 ? 'A+' :
                nota >= 90 ? 'A' :
                nota >= 85 ? 'B+' :
                nota >= 80 ? 'B' :
                nota >= 75 ? 'C+' :
                nota >= 70 ? 'C' : 'F'

console.log({ nota, grado });