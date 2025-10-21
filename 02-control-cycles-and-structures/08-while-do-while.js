const cars = ['Ford', 'Toyota', 'Honda', 'Chevrolet', 'Mercedes', 'BMW', 'Audi', 'Volkswagen', 'Hyundai', 'Kia'];

console.log("********** While **********");

let i = 0;
while (i < cars.length) {
    // if (i === 1) break;
    if (i === 2 ) {
        console.log('Found Honda');
        i++;
        continue
    }; 
    console.log(cars[i]);
    i++;
}

console.log("********** Do While **********");
let j = 0;
do {
    console.log(cars[j]);
    j++;
} while (cars[j]);
