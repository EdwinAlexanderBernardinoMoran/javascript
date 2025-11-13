import { Todo } from "../models/todo.model";

/**
 * 
 * @param {Todo} todo 
 */
export const createElementHTML = (todo) => {
    if ( !todo ) throw new Error('Todo is required');

    const html = `<h1>${ todo.description }</h1>`;

    const liElement = document.createElement('li');
    liElement.innerHTML = html;

    return liElement;
}