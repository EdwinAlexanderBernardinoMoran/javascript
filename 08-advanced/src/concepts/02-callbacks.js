import { heroes } from "../data/hero"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponents = (element) => {
    const id = '5d86371f97c29d020f1e1f6d'
    findHero( id, (hero) => {
        element.innerHTML = hero.name
    })
}

/**
 * 
 * @param {String} id 
 * @param { (hero: Object) => void} callback 
 */
const findHero = (id, callback) => {
    const hero = heroes.find( hero => hero.id === id)

    callback( hero )
}