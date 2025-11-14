/**
 * 
 * @param {HTMLDivElement} element 
 */
export const enviromentsComponents = (element) => {

    console.log(import.meta.env)
    const html = `
        Dev: ${ import.meta.env.DEV} <br/>
        Prod: ${ import.meta.env.PROD} <br/>
        API URL: ${ import.meta.env.VITE_API_URL} <br/>
        API KEY: ${ import.meta.env.VITE_API_KEY} <br/>
    `;

    element.innerHTML = html;
}