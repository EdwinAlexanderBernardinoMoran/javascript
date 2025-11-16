import { heroes } from "../data/hero"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponents = (element) => {
    const id = '5d86371f97c29d020f1e1f6ds'
    findHero( id, (error, hero) => {
        // element.innerHTML = hero?.name || 'No se encontro el heroe'
        if (error) {
            element.innerHTML = error;
            return;
        }
        element.innerHTML = hero.name;
    })
}

/**
 * 
 * @param {String} id 
 * @param { (error: String|Null, hero: Object) => void} callback 
 */
const findHero = (id, callback) => {
    const hero = heroes.find( hero => hero.id === id)

    if (!hero) {
        callback(`Hero with id ${id} not found`);
        return // undefined
    }

    callback(null, hero )
}