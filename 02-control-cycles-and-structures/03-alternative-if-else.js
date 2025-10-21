let day = 7;
let dayOfTheWeek = {
    0: "Domingo",
    1: "Lunes",
    2: "Martes",
    3: "Miércoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sábado",
}

let dayOfTheWeekTwo = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
]

console.log(dayOfTheWeek[day] || "Día no válido");
console.log(dayOfTheWeekTwo[day] || "Día no válido");