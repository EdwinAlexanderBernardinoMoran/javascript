const BASE_URL = 'https://api.breakingbadquotes.xyz/v1';

/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async () => {
    const response = await fetch(`${BASE_URL}/quotes/1`)
    const data = await response.json();

    return data[0];
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = async (element) => {
    document.querySelector('#app-title').innerHTML = 'Breaking Bad Characters';
    element.innerHTML = 'Loading...';

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.id = 'new-quote';
    nextQuoteButton.innerText = 'New Quote';

    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;

        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
    }

    // Añadir listener
    const newRequest = async () => {
        element.innerHTML = 'Loading...';
        const quote = await fetchQuote();
        renderQuote(quote);
    }
    
    nextQuoteButton.addEventListener('click', newRequest);

    fetchQuote().then(renderQuote);
}