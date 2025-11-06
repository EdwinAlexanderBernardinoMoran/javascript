import _ from 'underscore';


/**
 * Create a new deck of cards
 * @param {Array<String>} cardType 
 * @param {Array<String>} specialTypes 
 * @returns {Array<String>} deck
 */
export const createDeck = (cardType, specialTypes) => {

    if (!cardType || !cardType.length === 0) throw new Error('Card types are required to create a deck');
    if (!specialTypes || specialTypes.length === 0) throw new Error('Special card types are required to create a deck');

    let deck = [];

    for (let i = 2; i <= 10; i++){
        for (let type of cardType) {
            deck.push(i + type);
        }
    }

    for (let type of cardType) {
        for (let special of specialTypes) {
            deck.push(special + type);
        }
    }

    return _.shuffle(deck);
}