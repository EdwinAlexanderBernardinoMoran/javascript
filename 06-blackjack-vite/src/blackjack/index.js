import _ from 'underscore';

import { createDeck, orderLetter, accumulatePoints, createCard , orderLetterComputer} from './usecases';

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

    // Events
    btnAskLetter.addEventListener('click', () => {

        const card = orderLetter( deck );
        const playerPointsTwo = accumulatePoints( card, 0, playerPoints, pointsSmall);

        console.log("PlayerPoints", playerPointsTwo);
        console.log("PlayerPoints", playerPoints);

        createCard( card, 0, divCardPlayers)

        if ( playerPointsTwo > 21) {
            console.warn('You lost!');
            btnAskLetter.disabled = true;
            btnStop.disabled = true;
            orderLetterComputer( playerPointsTwo, playerPoints, pointsSmall, divCardPlayers, deck);
        } else if ( playerPointsTwo === 21) {
            console.warn('21, genial!');
            btnAskLetter.disabled = true;
            btnStop.disabled = true;
            orderLetterComputer( playerPointsTwo, playerPoints, pointsSmall, divCardPlayers, deck);
        }

    })

    btnStop.addEventListener('click', () => {
        btnAskLetter.disabled = true;
        btnStop.disabled = true;
        orderLetterComputer( playerPoints[0], playerPoints.length, pointsSmall, divCardPlayers, deck);
    })

    btnNewGame.addEventListener('click', () => {
        initializeGame();
    })

    return {
        initializeGame
    };
})(); // IIFE Funcion anónima autoejecutable = Patron Módulo