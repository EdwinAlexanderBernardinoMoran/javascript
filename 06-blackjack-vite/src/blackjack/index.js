import _ from 'underscore';

import { createDeck, orderLetter, valueCard } from './usecases';

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
        deck = createDeck(types, specials);
        playerPoints = [];

        for (let i = 0; i < numberPlayers; i++) {
            playerPoints.push(0);
        }

        pointsSmall.forEach( elem => elem.innerText = 0 );
        divCardPlayers.forEach( element => element.innerHTML = '' );

        btnAskLetter.disabled = false;
        btnStop.disabled = false;
    }

    // Function to accumulate points
    const accumulatePoints = ( card, turn ) => {
        playerPoints[turn] = playerPoints[turn] + valueCard( card );
        pointsSmall[turn].innerText = playerPoints[turn];

        return playerPoints[turn];  
    }

    // Function to create the card
    const createCard = ( card, turn ) => {
        const imageCard = document.createElement('img');
        imageCard.src = `assets/cards/${ card }.png`; // 3H, JD
        imageCard.classList.add('card-player');
        divCardPlayers[turn].append( imageCard );
    }

    // Function to determine the winner
    const determineWinner = () => {
        
        const [ minPoints, computerPoints ] = playerPoints;
        setTimeout(() => {
            if ( computerPoints === minPoints ) {
                alert('This is a tie!');
            } else if ( minPoints > 21 ) {
                alert('The computer wins!');
            } else if ( computerPoints > 21 ) {
                alert('You win!');
            } else {
                alert('The computer wins!');
            }
        }, 30)

        console.log("Nuevo");
        
    }

    // Function for the computer's turn
    const orderLetterComputer = ( minPoints ) => {

        let computerPoints = 0;
        do {
            const card = orderLetter( deck );
            computerPoints = accumulatePoints( card, playerPoints.length - 1 );
            createCard( card, playerPoints.length - 1 );

        } while ( (computerPoints < minPoints ) && ( minPoints <= 21 ) );

        determineWinner();
    }

    // Events
    btnAskLetter.addEventListener('click', () => {

        const card = orderLetter( deck );
        const playerPoints = accumulatePoints( card, 0 );

        createCard( card, 0)

        if ( playerPoints > 21) {
            console.warn('You lost!');
            btnAskLetter.disabled = true;
            btnStop.disabled = true;
            orderLetterComputer( playerPoints );
        } else if ( playerPoints === 21) {
            console.warn('21, genial!');
            btnAskLetter.disabled = true;
            btnStop.disabled = true;
            orderLetterComputer( playerPoints );
        }

    })

    btnStop.addEventListener('click', () => {
        btnAskLetter.disabled = true;
        btnStop.disabled = true;
        orderLetterComputer( playerPoints[0] );
    })

    btnNewGame.addEventListener('click', () => {
        initializeGame();
    })

    return {
        initializeGame
    };
})(); // IIFE Funcion anónima autoejecutable = Patron Módulo