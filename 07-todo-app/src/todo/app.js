import todoStore, { Filters } from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos, renderPending } from './use-cases';

const elementIds = {
    todoList: '.todo-list',
    newTodoInput: '#new-todo-input',
    clearCompleted: '.clear-completed',
    TodoFilters: '.filtro',
    pendingCount: '#pending-count'
}

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(elementIds.todoList, todos);
        updatePendingCount();
    }

    const updatePendingCount = () => {
        renderPending(elementIds.pendingCount)
    }

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    // Referencias HTML
    const newDescriptionInput = document.querySelector(elementIds.newTodoInput);
    const todoListUl = document.querySelector(elementIds.todoList);
    const clearCompleted = document.querySelector(elementIds.clearCompleted);
    const filtersUl = document.querySelectorAll(elementIds.TodoFilters);

    // Listeners
    newDescriptionInput.addEventListener('keyup', (event) => {
        if (event.keyCode !== 13) return;
        if ( event.target.value.trim().length === 0 ) return;

        todoStore.addTodo( event.target.value );
        displayTodos();
        event.target.value = '';
    })

    todoListUl.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo( element.getAttribute('data-id') );
        displayTodos();
    })

    todoListUl.addEventListener('click', (event) => {

        const isDestroyElement = event.target.className === 'destroy';
        const todo = event.target.closest('[data-id]');
        if (!isDestroyElement) return;

        todoStore.deleteTodo( todo.getAttribute('data-id') );
        displayTodos();
    })

    clearCompleted.addEventListener('click', () => {
        todoStore.deleteCompleted();
        displayTodos();
    })

    filtersUl.forEach( element => {
        element.addEventListener('click', (element) => {
            filtersUl.forEach( el => el.classList.remove('selected') );
            element.target.classList.add('selected');

            console.log('Filter clicked:');
            console.log(element.target.text);

            switch (element.target.text) {
                case 'Todos':
                    todoStore.setFilter(Filters.ALL);    
                    break;
                
                case 'Pendientes':
                    todoStore.setFilter(Filters.PENDING);    
                    break;

                case 'Completados':
                    todoStore.setFilter(Filters.COMPLETED);    
                    break;
            
                default:
                    break;
            }

            displayTodos();
        })
    })
}