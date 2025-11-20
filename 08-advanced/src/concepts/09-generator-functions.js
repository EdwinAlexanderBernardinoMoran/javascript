/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) => {

    const myGenerator = myFirstGeneratorFunction();

    console.log('First call:', myGenerator.next());
    console.log('Second call:', myGenerator.next());

    const generatorIds = idGenerator();
    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append(button);

    const renderButton = () => {
        const {value} = generatorIds.next();
        button.innerText = `Click ${value}`;
    }

    button.addEventListener('click', renderButton);
}

// Ejemplo de generator function
function* idGenerator(){
    let currentId = 0;
    while(true){
        yield ++currentId;
    }
}

function* myFirstGeneratorFunction() {
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';
    return 'Hello from generator function';
}