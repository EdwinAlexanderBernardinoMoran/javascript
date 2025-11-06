/**
 * 
 * @param {Array<String>} deck 
 * @returns Function to take a card
 */
export const orderLetter = ( deck ) => {
        
    if( deck.length === 0 ) {
        throw 'No cards left in the deck';
    }

    return deck.pop();
}