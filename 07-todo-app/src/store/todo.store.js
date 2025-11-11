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

export default {
    initStore
}