/*
    Dias de semana abrimos a las 11
    Fines de semana abrimos a las 9
*/

// Entra a un sitio web, para consultar si esta abierto hoy ...

const dayWeek = 1;
const currentTime = 11;

let openingHours;
let message;

// if ([0, 6].includes( dayWeek )) {
//     console.log('Weekend');
//     openingHours = 9;
// } else {
//     console.log('Day of the week');
//     openingHours = 11;
// }

// if ( currentTime >= openingHours ) {
//     message = 'We are open';
// } else {
//     message = `We are closed, we open at ${ openingHours }`;
// }

openingHours = [0, 6].includes( dayWeek) ? 9 : 11

message = currentTime >= openingHours ? 'we are open' : `We are closed, we open at ${ openingHours }`;
console.log({ openingHours });
console.log({ message });
