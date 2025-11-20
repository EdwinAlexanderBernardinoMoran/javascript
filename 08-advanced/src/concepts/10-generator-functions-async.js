import { heroes } from '../data/hero.js';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionAsyncComponent = async (element) => {
    const heroGenerator  = getHeroGenerator();
    let isFinished = false;

    do {
        const { value, done } = await heroGenerator.next();
        isFinished = done;

        if (isFinished) break
        console.log({value, done});
        
        element.innerHTML = value;

    } while (!isFinished);
}

async function* getHeroGenerator() {
    for (const hero of heroes) {
        await sleep();
        yield hero.name;
    }

    return 'No hay más héroes';
}

const sleep = () => {
    return new Promise((resolve) => setTimeout(resolve, 500));
};
