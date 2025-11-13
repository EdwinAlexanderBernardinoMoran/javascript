import { Todo } from "../models/todo.model";
import { createElementHTML } from "./";

/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = (elementId, todos = []) => {
    const element = document.querySelector(elementId);

    todos.forEach( todo => {
        element.append( createElementHTML(todo))
    });
}