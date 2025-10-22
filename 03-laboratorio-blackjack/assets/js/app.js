/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];

/* Esta función crea un nuevo deck */
const createDeck = () => {
    for (let i = 2; i <= 10; i++){
        for (let type of types) {
            deck.push(i + type);
        }
    }

    for (let type of types) {
        for (let special of specials) {
            deck.push(special + type);
        }
    }

    deck = _.shuffle(deck);
    console.log(deck);

    return deck;
    
}

createDeck();

const orderLetter = ( ) => {
    
    if( deck.length === 0 ) {
        throw 'No cards left in the deck';
    }

    const card = deck.pop();

    console.log(deck);
    console.log(card);
        
    return card;
}

orderLetter();