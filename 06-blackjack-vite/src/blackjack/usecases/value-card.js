/**
 * 
 * @param {String} card Value of the card
 * @returns To get the value of the card
 */

export const valueCard = ( card ) => {
    const value = card.substring(0, card.length -1);
    return isNaN( value) ? ( value === 'A' ) ? 11 : 10 : Number( value );
}