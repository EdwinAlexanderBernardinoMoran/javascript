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
    x = a + b

console.log(x)
```

# S3 - Fundamentos, primitivos, arreglos, objetos y funciones basicas.

### Tipos de datos primitivos.

- JavaScript es debilmente tipado, es decir el infiere el tipo de dato

**Tipo de dato de una variable**: Describe el contenido del valor  que tiene la variable.
**Primitivos**: ELos tipos de datos primitivos en JavaScript son los valores más básicos y fundamentales que no es un objeto y son inmutables.

**Tipos de datos primitivos en JavaScript:**

- **String**: Texto, por ejemplo `"Hola"`.
- **Number**: Números, por ejemplo `42` o `3.14`.
- **Boolean**: Valores lógicos, `true` o `false`.
- **Undefined**: Indica que una variable no tiene valor asignado.
- **Null**: Representa la ausencia intencional de valor.
- **Symbol**: Identificadores únicos (usados en casos avanzados).
- **BigInt**: Números enteros muy grandes.

