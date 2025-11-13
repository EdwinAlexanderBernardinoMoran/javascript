import { Todo } from '../todo/models/todo.model'

const Filters = {
    ALL: 'all',
    COMPLETED: 'completed',
    PENDING: 'pending'
}

const state = {
    todos: [
        new Todo('Learn Vuex', false),
        new Todo('Build a todo app', true),
        new Todo('Write tests', false),
        new Todo('Deploy to production', false)
    ],
    filter: Filters.ALL
}

const initStore = () => {
    console.log(state);
    
    console.log('Initializing the store...')
}

const loadStore = () => {
    throw new Error('Function not implemented.')
}

/**
 * 
 * @param {String} filter filter name
 */
const getTodos = (filter = Filters.ALL) => {
    switch (filter) {
        case Filters.ALL:
            return [...state.todos];
        case Filters.COMPLETED:
            return state.todos.filter( todo => todo.done );
        case Filters.PENDING:
            return state.todos.filter( todo => !todo.done );
        default:
            throw new Error(`Option ${ filter } is not valid`);
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = ( description ) => {
    if ( !description ) throw new Error('Description is required');

    state.todos.push( new Todo( description));
}

/**
 * 
 * @param {String} id 
 */
const toggleTodo = ( id ) => {
    state.todos = state.todos.map( todo => {
        if (todo.id === id) {
            todo.done = !todo.done;
        }
        return todo;
    })
}

/**
 * 
 * @param {String} id 
 */
const deleteTodo = ( id ) => {
    state.todos = state.todos.filter( todo => todo.id !== id );
}

/**
 * 
 * @param {String} id 
 */
const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => todo.done)
}

/**
 * 
 * @param {String} newFilter filter name ( all, completed, pending )
 */
const setFilter = ( newFilter = Filters.ALL) => {
    state.filter = newFilter
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    initStore,
    loadStore,
    getTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter
}