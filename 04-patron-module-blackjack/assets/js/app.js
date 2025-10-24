/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

(() => {
    'use strict'

    let deck = [];
    const types = ['C', 'D', 'H', 'S'],
            specials = ['A', 'J', 'Q', 'K'];

    let playerPoints = [];

    // Referencia html
    const btnNewGame = document.querySelector('#btn-new-game'),
            btnAskLetter = document.querySelector('#btn-ask-letter'),
            btnStop = document.querySelector('#btn-stop');

    const pointsSmall = document.querySelectorAll('small'),
            divCardPlayers = document.querySelectorAll('.cards');

    // Initialize the game
    const initializeGame = ( numberPlayers = 2) => {
        deck = createDeck();

        for (let i = 0; i < numberPlayers; i++) {
            playerPoints.push(0);
        }
    }

    /* Esta función crea un nuevo deck */
    const createDeck = () => {
        deck = [];

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

        return _.shuffle(deck);
    }

    const orderLetter = ( ) => {
        
        if( deck.length === 0 ) {
            throw 'No cards left in the deck';
        }

        return deck.pop();
    }

    const valueCard = ( card ) => {
        const value = card.substring(0, card.length -1);
        return isNaN( value) ? ( value === 'A' ) ? 11 : 10 : Number( value );
    }

    const accumulatePoints = ( card, turn ) => {
        playerPoints[turn] = playerPoints[turn] + valueCard( card );
        pointsSmall[turn].innerText = playerPoints[turn];

        return playerPoints[turn];  
    }

    const createCard = ( card, turn ) => {
        const imageCard = document.createElement('img');
        imageCard.src = `assets/cards/${ card }.png`; // 3H, JD
        imageCard.classList.add('card-player');
        divCardPlayers[turn].append( imageCard );
    }

    const orderLetterComputer = ( minPoints ) => {
        let computerPoints = 0;
        do {
            const card = orderLetter();

            // computerPoints = computerPoints + valueCard( card );
            // pointsSmall[1].innerText = computerPoints;
            computerPoints = accumulatePoints( card, playerPoints.length - 1 );
            createCard( card, playerPoints.length - 1 );

            // const imageCard = document.createElement('img');
            // imageCard.src = `assets/cards/${ card }.png`; // 3H, JD
            // imageCard.classList.add('card-player');
            // cardComputer.append( imageCard );

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

        // playerPoints = playerPoints + valueCard( card );
        // pointsSmall[0].innerText = playerPoints;
        
        const playerPoints = accumulatePoints( card, 0 );
        

        // const imageCard = document.createElement('img');
        // imageCard.src = `assets/cards/${ card }.png`; // 3H, JD
        // imageCard.classList.add('card-player');
        // cardPlayer.append( imageCard );

        createCard( card, 0)

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

        initializeGame();
        // playerPoints = 0;
        // computerPoints = 0;

        // pointsSmall[0].innerText = 0;
        // pointsSmall[1].innerText = 0;

        // cardPlayer.innerHTML = '';
        // cardComputer.innerHTML = '';

        // btnAskLetter.disabled = false;
        // btnStop.disabled = false;
    })
})(); // IIFE Funcion anónima autoejecutable = Patron Módulo

