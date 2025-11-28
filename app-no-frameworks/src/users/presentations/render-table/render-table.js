import "./render-table.css";

import usersStore from '../../store/users.store'
import { showModal } from "../render-modal/render-modal";

let table;

const createTable = () => {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Balance</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
    `;

    const tbody = document.createElement('tbody');
    table.append(thead, tbody);
    return table;
}

/**
 * 
 * @param {MouseEvent} event 
 */
const tableSelectListener = (event) => {
    const element = event.target.closest('.select-user');

    if (!element) return;
    
    const id = element.getAttribute('data-id');
    showModal(id);
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = (element) => {
    const users = usersStore.getUsers();

    if (!table) {
        table = createTable();
        element.append(table);

        // TODO: listeners a las tablas
        table.addEventListener('click', tableSelectListener);
    }

    let tableHtml = '';
    users.forEach(user => {
        tableHtml += `
            <tr>
                <td>${user.id}</td>
                <td>${user.balance}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.isActive ? 'Yes' : 'No'}</td>
                <td>
                    <a href="#/" class="select-user" data-id="${user.id}">Edit</a>
                    <a href="#/" class="delete-user" data-id="${user.id}">Delete</a>
                </td>
            </tr>
        `;
    })
    table.querySelector('tbody').innerHTML = tableHtml;
}