/**
 * 
 * @param {String} card Value of the card
 * @param {Number} turn Player's turn
 * @param {Array<HTMLElement>} divCardPlayers Player's card elements
 */

export const createCard = ( card, turn, divCardPlayers ) => {

    const imageCard = document.createElement('img');
    imageCard.src = `assets/cards/${ card }.png`; // 3H, JD
    imageCard.classList.add('card-player');
    divCardPlayers[turn].append( imageCard );
}