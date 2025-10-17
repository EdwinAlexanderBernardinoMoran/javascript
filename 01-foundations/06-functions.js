function greet(name){
    console.log(arguments);
    
    console.log(`Hola ${name}`);

    return 1;
}

const newGreet = function(name){
    console.log(`Hola ${name}`);
}

const greetTwo = (name) => {
    console.log(`Hola ${name}`);
}

const result = greet("Mundo", 40, true, "extra arg");

newGreet("Mundo 1");
greetTwo("Mundo 2");

console.log({result});


// Ejercicio

function suma(a, b) {
  return a + b;
}

const sumarTwo = (a, b) => a + b;

console.log(sumarTwo(3, 7));
console.log(suma(5, 10));


// Ejercicio

function getAleatorio() {
  return Math.random();
}

console.log(getAleatorio());

// Arrow function

const getAleatorioTwo = () => Math.random();

console.log(getAleatorioTwo());

