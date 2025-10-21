const returnTrue = () => {
    console.log("returnTrue called");
    return true;
}

const returnFalse = () => {
    console.log("returnFalse called");
    return false;
}

console.log('Not a la negacion');
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log( !returnFalse() ); // true

console.log('And operador &&');
console.log(true && true);
console.log(true && false);
console.log(true && !false);

console.log('=======');

console.log( returnFalse() && returnTrue()); 
console.log( returnTrue() && returnFalse());

console.log('==== && ====');
returnTrue() && returnFalse();

console.warn('Or operador ||');
console.log(true || false);
console.log( returnTrue() || returnFalse());
console.log( returnFalse() || returnTrue());

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola mundo';
const a2 = 'Hola' && 'Mundo' && soyFalso;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyNull || soyUndefined || 'Ya no soy falso de nuevo' || true;

console.log({a1});
console.log({a2});
console.log({a3});
console.log({a4});

