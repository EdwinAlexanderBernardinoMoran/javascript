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

const pointsSmall = document.querySelectorAll('small')
const cardPlayer = document.querySelector('#card-player');
const cardComputer = document.querySelector('#card-computer');


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

const orderLetterComputer = ( minPoints ) => {
    do {
        const card = orderLetter();

        computerPoints = computerPoints + valueCard( card );

        pointsSmall[1].innerText = computerPoints;

        const imageCard = document.createElement('img');
        imageCard.src = `assets/cards/${ card }.png`; // 3H, JD
        imageCard.classList.add('card-player');
        cardComputer.append( imageCard );

        if ( minPoints > 21) {
            break;
        }
    } while ( (computerPoints < minPoints ) && ( minPoints <= 21 ) );

    setTimeout(() => {
        if ( computerPoints === minPoints ) {
            alert('This is a tie!');
        } else if ( minPoints > 21 ) {
            alert('The computer wins!');
        } else if ( computerPoints > 21 ) {
            alert('You win!');
        }
    }, 30)
}

// Events
btnAskLetter.addEventListener('click', () => {

    const card = orderLetter();

    playerPoints = playerPoints + valueCard( card );

    pointsSmall[0].innerText = playerPoints;

    const imageCard = document.createElement('img');
    imageCard.src = `assets/cards/${ card }.png`; // 3H, JD
    imageCard.classList.add('card-player');
    cardPlayer.append( imageCard );

    if ( playerPoints > 21) {
        btnAskLetter.disabled = true;
        btnStop.disabled = true;
        orderLetterComputer( playerPoints );
    } else if ( playerPoints === 21) {
        btnAskLetter.disabled = true;
        btnStop.disabled = true;
        orderLetterComputer( playerPoints );
    }

})

btnStop.addEventListener('click', () => {
    btnAskLetter.disabled = true;
    btnStop.disabled = true;
    orderLetterComputer( playerPoints );
})

btnNewGame.addEventListener('click', () => {
    deck = [];
    playerPoints = 0;
    computerPoints = 0;

    pointsSmall[0].innerText = 0;
    pointsSmall[1].innerText = 0;

    cardPlayer.innerHTML = '';
    cardComputer.innerHTML = '';

    btnAskLetter.disabled = false;
    btnStop.disabled = false;

    createDeck();
})