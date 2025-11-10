import { orderLetter } from "./";
import { accumulatePoints } from "./"
import { createCard } from "./";

/**
 * 
 * @param {Number} minPoints of the player
 * @param {Array<Number>} playerPoints Player's points
 * @param {Array<HTMLElement>} pointsSmall
 * @param {Array<HTMLElement>} divCardPlayers
 * @param {Array<String>} deck of cards
 */
export const orderLetterComputer = ( minPoints, playerPoints, pointsSmall, divCardPlayers, deck = []) => {

    console.log('orderLetterComputer');
    console.log({minPoints, playerPoints, pointsSmall, divCardPlayers, deck});


    if ( !minPoints ) throw new Error('Min points is required');
    let computerPoints = 0;
    do {
        const card = orderLetter( deck );
        computerPoints = accumulatePoints( card, playerPoints.length - 1, playerPoints, pointsSmall);
        createCard( card, playerPoints.length - 1, divCardPlayers);

    } while ( (computerPoints < minPoints ) && ( minPoints <= 21 ) );

    determineWinner(minPoints, computerPoints);
}

const determineWinner = (minPoints, computerPoints) => {
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
    }