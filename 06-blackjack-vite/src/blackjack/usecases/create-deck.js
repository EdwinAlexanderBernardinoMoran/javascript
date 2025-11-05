import _ from 'underscore';

// This function creates a new deck
export const createDeck = (cardType, specialTypes) => {
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