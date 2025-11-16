import { heroes } from "../data/hero"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponents = (element) => {
    const id = '5d86371f97c29d020f1e1f6d'
    const idTwo = '5d86371fd55e2e2a30fe1ccb'
    findHero( id, (error, hero) => {
        // element.innerHTML = hero?.name || 'No se encontro el heroe'
        if (error) {
            element.innerHTML = error;
            return;
        }

        findHero( idTwo, (error, hero2) => {
            if (error) {
                element.innerHTML = error;
                return;
            }

            element.innerHTML = `${ hero.name } / ${ hero2.name }`;
        })
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