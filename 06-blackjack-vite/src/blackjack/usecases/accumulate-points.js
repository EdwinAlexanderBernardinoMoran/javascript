
import { valueCard } from "./";

/**
 * 
 * @param {String} card Value of the card
 * @param {Number} turn Player's turn
 * @param {Array<Number>} playerPoints Player points
 * @param {Array<HTMLElement>} pointsSmall  Small point elements
 * @returns 
 */
export const accumulatePoints = ( card, turn, playerPoints, pointsSmall ) => {
    console.log('Accumulate Points');
    
    console.log({card, turn, playerPoints, pointsSmall});
    playerPoints[turn] = playerPoints[turn] + valueCard( card );
    pointsSmall[turn].innerText = playerPoints[turn];

    return playerPoints[turn];  
}