# Seccion 1 - Javascript y su historia.

- Velocidad maxima de los modems en los anos 90 era de 28Kbps, abrio la oportunidad crear formularios entre otras cosas mas complejas.
- Surgio a raiz de que no habia forma de validar datos sin antes mandarlos al servidor, era la unica forma.
- Su creador fue Brendan Eich empleado de NextCape, su primera version se llamo LiveScript por marquetin se llamo JavaScript.

- En 1997 se estandarizo el lenguaje enviaron la especificacion a ECMA(European Computer Manufacturers Association)
- ECMA creo un comite para estandarizar el lenguaje de script multiplataforma sin importar la empresa que lo usara llamado TC39 el cual creo el primer estandar llamado ECMA 262
- Javascript no es mas que la implementacion que realizo la empresa Netscape del estandar ECMAScript.

# ¿Dónde se utiliza JavaScript?

JavaScript se utiliza principalmente en los siguientes lugares:

- **Desarrollo web**: Para crear páginas web interactivas y dinámicas en navegadores.
- **Aplicaciones móviles**: Usando frameworks como React Native.
- **Aplicaciones de escritorio**: Con tecnologías como Electron.
- **Desarrollo del lado del servidor**: Utilizando Node.js.
- **Automatización y scripting**: Para tareas automatizadas en diferentes entornos.

JavaScript es un lenguaje muy versátil y ampliamente adoptado en la industria tecnológica.

- JavaScript se recomienda ponerlo al final del body
- Mala practica usar scripts en el html

**1996**: LiveScript a JavaScript(stándar)
**1997**: ES1 (ECMAScript 1)
**2009**: ES5 (ECMAScript 5) Con muchas características nuevas.
**2015**: ES6/ES2015 (ECMAScript 2015) que fue la actualización más grande de JavaScript hasta el momento.

- Que es un Polyfill?

Es un codigo que provee el funcionamiento de una nueva característica de JavaScript (ES6), en versiones viejas como ES5.

**Forma de definir variables**

```js
let a = 10,
  b = 20,
  c = 10,
  d = 10,
  x = a + b;

console.log(x);
```

# S3 - Fundamentos, primitivos, arreglos, objetos y funciones basicas.

### Tipos de datos primitivos.

- JavaScript es debilmente tipado, es decir el infiere el tipo de dato

**Tipo de dato de una variable**: Describe el contenido del valor que tiene la variable.
**Primitivos**: ELos tipos de datos primitivos en JavaScript son los valores más básicos y fundamentales que no es un objeto y son inmutables.

**Tipos de datos primitivos en JavaScript:**

- **String**: Texto, por ejemplo `"Hola"`.
- **Number**: Números, por ejemplo `42` o `3.14`.
- **Boolean**: Valores lógicos, `true` o `false`.
- **Undefined**: Indica que una variable no tiene valor asignado.
- **Null**: Representa la ausencia intencional de valor.
- **Symbol**: Identificadores únicos (usados en casos avanzados).
- **BigInt**: Números enteros muy grandes.

### Palabras reservadas y nombres de variables.

- Es mala practica nombrar los nombres de los archivos con camelcase o espacio entre palabras (02-reserved-words-and-variable-names)
- Las variables se escriben con `lowerCamelCase`(primera letra de la primera palabra es minúscula, y la primera letra de todas las palabras subsiguientes va en mayúscula)
- Las clases se escriben con `upperCamelCase`(primera letra de la primera palabra es minúscula, y la primera letra de todas las palabras subsiguientes va en mayúscula)

### Objetos literales

Los objetos literales en JavaScript son una forma sencilla y directa de crear objetos utilizando una sintaxis de llaves {}. Permiten agrupar datos y funcionalidades (propiedades y métodos) bajo un mismo nombre.

**Propiedades**: `nombre` y `edad` almacenan datos.
**metodos**: `saludar` es una función asociada al objeto.

Si asignas un objeto a una constante (`const`), puedes modificar sus propiedades o agregar nuevas, pero no puedes reasignar la constante a un objeto diferente. Es decir, la referencia al objeto permanece igual, aunque su contenido pueda cambiar.

- Formas de acceder a un objeto.

```js
const person = {
  name: "Tony Stark",
  codeName: "Ironman",
  live: true,
  age: 45,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  suits: ["Mark I", "Mark V", "Hulkbuster"],
  address: {
    zip: "10880, 90265",
    location: "Malibu, California",
  },
  "last-movie": "Infinity War",
};

person.name;
person["name"];

// Forma de acceder a una propiedad poco comun dentro del obj
person["last-movie"];

// Accediento a un objeto dentro de un objeto
person.coords.lat;

// Contando el numero de elementos dentro del arreglo
person.suits.lenth;

// Obteniendo el ultimo elemento del arreglo
person.suits[person.suits.length - 1];

// Eliminando una propiedad del obj
delete persona.age;

// Conversion de obj a arreglo. ()
const entriesPares = Object.entries(person);

// Congela el objeto y bloquea la asignacion de nuevas propiedades y actualizacion de ellas, pero no bloquea a los obj que estan dentro del obj
Object.freeze(person);

// Lista todas las propiedades que tiene el obj
const propertiesObjects = Object.getOwnPropertyNames(person);

// Obtiene el valor de las propiedades del obj
const valuesProperties = Object.values(person);
```

Este recurso proporciona información adicional sobre las propiedades y métodos de los objetos en JavaScript. Consulta la documentación oficial para explorar más métodos y características disponibles:

[Más información sobre objetos en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object)

### Funciones basicas y de flecha

- Las funciones básicas (o funciones tradicionales) en JavaScript son aquellas que se definen usando la palabra clave

```js
function greet(name) {
  console.log(arguments);

  console.log(`Hola ${name}`);
}
```

- Las funciones de flecha (arrow functions) son una forma más concisa de escribir funciones introducida en ES6. Usan la sintaxis () => {}. Ejemplo:

```js
const greetTwo = (name) => {
  console.log(`Hola ${name}`);
};

const greetThree = () => {
  console.log("Hello world");
};

const sumarTwo = (a, b) => a + b;

const getAleatorioTwo = () => Math.random();
```

**Diferencias clave**

- Las funciones de flecha no tienen su propio this, lo heredan del contexto donde se crean.
- Las funciones tradicionales sí tienen su propio this.
- Las funciones de flecha suelen ser más cortas y legibles para funciones simples.

### Retorno de las funciones

El retorno de una función es el valor que una función "devuelve" después de ejecutarse. Cuando llamas a una función, puedes obtener un resultado usando la palabra clave `return` en la mayoría de los lenguajes de programación.

```js
def sumar(a, b):
    return a + b

resultado = sumar(2, 3)  // resultado ahora vale 5
```

- La función sumar retorna el resultado de a + b.
- El valor retornado puede ser usado en otras partes del código.

**Importante**

Si una función no tiene una instrucción `return`, en muchos lenguajes retorna un valor especial como None (Python) o undefined (JavaScript).

### Pro tip: Funciones, argumentos y desestructuracion de objetos

**Arrow function**: Arrow function, los parentesis indicann que retornamos todo lo que esta dentro de los parentesis como un objeto.

```js
const createPersonArrow = (lastName, age) => ({ lastName, age });
```

**Objeto arguments**: Las funciones de flecha no manejan o no crear este obj de `arguments` es algo que solo tienen los obj tradicionales.

```js
// Funcion tradicional
function printArguments() {
  console.log(arguments);
}

// Funcion de flecha
const printArgumentsArrow = () => {
  console.log(arguments);
};
```

- En caso de querer incorporar el objeto `arguments` en una funcion de flecha es de la siguiente manera.

```js
const printArgumentsArroTwo = (...args) => {
  console.log(args);
};
```

- Despues de la edad todos lo argumentos se guardan en args como un arreglo. Despues del parametro `...args` no puede haber mas parametros.

```js
const printArgumentsArroThree = (age, ...args) => {
  // ...args = Se conoce como parametro rest, el cual le dice que todos los argumentos que sean enviados despues de age, se creara un arreglo con todos ellos.
  console.log({ age, args });
  return args;
};
```

**Desestructuración de arreglos**: Permite extraer valores individuales de un arreglo y asignarlos a variables de manera sencilla y legible.

En el ejemplo, la función `printArgumentsArroThree` retorna un arreglo, y mediante la desestructuración se asignan sus elementos a variables individuales:

```js
const [married, live, namePerson, greet] = printArgumentsArroThree(
  10,
  true,
  "Edwin",
  "Hola"
);
```

Así, cada variable (`married`, `live`, `namePerson`, `greet`) recibe el valor correspondiente del arreglo retornado por la función.

**Destructuracion de argumentos**:

Es una técnica de JavaScript que permite extraer valores de un objeto o arreglo directamente en los parámetros de una función. Así, puedes acceder a propiedades específicas sin tener que referenciar el objeto completo dentro de la función.

```js
const person = {
  name: "Tony Stark",
  codeName: "Ironman",
  live: true,
  age: 45,
  suits: ["Mark I", "Mark V", "Hulkbuster"],
};

const printProperties = ({ name, codeName, live, age = 0, suits }) => {
  console.log({ name });
  console.log({ codeName });
  console.log({ live });
  console.log({ age });
  console.log({ suits });
};

printProperties(person);
```

# S4 - Ciclos y estructuras de control

### Valor, referencia y romper la referencia

- Todos los valores primitivos (number, string, boolean, null, undefined, symbol, bigint) se pasan por valor.

- Los objetos (arrays, funciones, objetos literales, etc.) se pasan por referencia.

- Rompiendo la referencia con el operador `spread` o `slice`.

```js
// Objetos
let peter = { name: "Peter" };
let mary = { ...peter }; // Spread operator

mary.name = "Mary";

console.log({ peter, mary });

const updateName = ({ ...person }) => {
  person.name = "Peter Parker";
  return person;
};

let peterParker = { name: "Spiderman" };
let spiderman = updateName(peterParker);

console.log({ peterParker, spiderman });

// Arreglos
const fruits = ["Apple", "Banana", "Orange"];
const fruits2 = fruits; // Referencia
const fruits3 = [...fruits]; // Copia
const fruits4 = fruits.slice(); // Copia

fruits2.push("Mango");

console.table({ fruits, fruits2, fruits3, fruits4 });
```

### if y else

- `=` es el operador de asignación. Se usa para asignar un valor a una variable.
- `==` es el operador de comparación de igualdad "débil". Compara dos valores después de convertirlos (si es necesario) al mismo tipo.
- `===` es el operador de comparación de igualdad "estricta". Compara tanto el valor como el tipo de los operandos.

### Logica boleana

**Operador And (&&)**: Devuelve un `True` si todos los valores son verdaderos, en caso la primera devuelva falso ya no se ejecuta el siguiente valor.
**Operador Or (||)**: Devuelve un `True` si almenos uno de los valores son verdaderos, en caso el primero sea verdadero ya no se ejecuta el siguiente valor.

### Operador ternario

- El operador ternario en JavaScript es una forma concisa de escribir una expresión condicional (if-else). Su sintaxis es:

```js
const edad = 18;
const mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // Imprime: Eres mayor de edad
```
