import "./render-table.css";

import usersStore from '../../store/users.store'

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
 * @param {HTMLDivElement} element 
 */
export const renderTable = (element) => {
    const users = usersStore.getUsers();

    if (!table) {
        table = createTable();
        element.append(table);

        // TODO: listeners a las tablas
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
                    <a href="#/" data-id="${user.id}">Edit</a>
                    <a href="#/" data-id="${user.id}">Delete</a>
                </td>
            </tr>
        `;
    })
    table.querySelector('tbody').innerHTML = tableHtml;
}