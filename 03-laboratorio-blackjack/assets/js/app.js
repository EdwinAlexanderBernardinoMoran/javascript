/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];

let playerPoints = 0;
let computerPoints = 0;

// Referencia html
const btnNewGame = document.querySelector('#btn-new-game');
const btnAskLetter = document.querySelector('#btn-ask-letter');
const btnStop = document.querySelector('#btn-stop');

const poinstSmall = document.querySelectorAll('small')

console.log(btnAskLetter);


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
    return deck;
}

createDeck();

const orderLetter = ( ) => {
    
    if( deck.length === 0 ) {
        throw 'No cards left in the deck';
    }

    const card = deck.pop();
    return card;
}

const valueCard = ( card ) => {
    const value = card.substring(0, card.length -1);

    return isNaN( value) ? ( value === 'A' ) ? 11 : 10 : Number( value );
}

// Events
btnAskLetter.addEventListener('click', () => {
    const card = orderLetter();

    playerPoints = playerPoints + valueCard( card );
    poinstSmall[0].innerText = playerPoints;
})
