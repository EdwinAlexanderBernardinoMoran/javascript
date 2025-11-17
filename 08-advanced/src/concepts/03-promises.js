import { heroes } from "../data/hero";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promisesComponents = (element) => {
    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderError = (error) => {
        element.innerHTML = `<span style="color:red">${ error }</span>`;
    }

    const id = '5d86371f97c29d020f1e1f6d'
    // findHero(id).then(hero => renderHero(hero))
    findHero(id)
        .then(renderHero)
        .catch(renderError);
}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id) => {
    return new Promise((resolve, reject) => {
        console.log('Searching hero...');
        const hero = heroes.find(hero => hero.id === id)

        if (!hero) {
            reject(`Hero with id ${id} not found`);
            return // undefined
        }

        resolve(hero)
    })
}