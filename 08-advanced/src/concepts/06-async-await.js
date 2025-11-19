import { heroes } from "../data/hero"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async (element) => {
    const id = '5d86371fd55e2e2a30fe1ccb1'
    const idTwo = '5d86371fd55e2e2a30fe1ccb2'
    
    element.innerHTML = 'Loading...';

    // Tambien se puede desustruturar
    try {
        const hero = await findHero(id);
        const heroTwo = await findHero(idTwo);

        element.innerHTML = `${ hero.name } / ${ heroTwo.name }`;
    } catch (error) {
        element.innerHTML = error;
    }

}

const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);

    if (!hero) throw `Hero with id ${ id } not found`;
    
    return hero;
}