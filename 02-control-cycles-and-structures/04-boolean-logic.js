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




