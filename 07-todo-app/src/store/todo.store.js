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
 * @param {String} description 
 */
const addTodo = ( description ) => {
    throw new Error("Function not implemented");
}

/**
 * 
 * @param {String} id 
 */
const toggleTodo = ( id ) => {
    throw new Error("Function not implemented");
}

/**
 * 
 * @param {String} id 
 */
const deleteTodo = ( id ) => {
    throw new Error("Function not implemented");
}

/**
 * 
 * @param {String} id 
 */
const clearCompleted = () => {
    throw new Error("Function not implemented");
}

/**
 * 
 * @param {String} newFilter filter name
 */
const setFilter = ( newFilter = Filters.ALL) => {
    throw new Error("Function not implemented");
}

const getCurrentFilter = () => {
    throw new Error("Function not implemented");
}

export default {
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    setFilter,
    getCurrentFilter
}