let a = 9;

if (a >= 10) {
    console.log("A es mayor o igual a 10");
} else if (a < 10) {
    console.log("A es menor que 10");
}

const hoy = new Date();
console.log(hoy);

let day = hoy.getDay();
console.log({ day });

if (day === 0) {
    console.log("Domingo");
} else {
    console.log("No es domingo");
}


console.log("Fin del programa");