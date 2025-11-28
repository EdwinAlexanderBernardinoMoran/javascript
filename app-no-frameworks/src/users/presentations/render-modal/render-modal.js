import modalHtml from './render-modal.html?raw'
import './render-modal.css';
import { getUserById } from '../../use-cases/get-user-by-id';

let modal, form;

let loaderUser = {};

// TODO: cargar usuario por id
export const showModal = async (id) => {
    modal?.classList.remove('hide-modal');
    loaderUser = {};

    if (!id) return;

    const user = await getUserById(id);
    setFormValues(user);
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset();
}

/**
 * @param {User} user
 */
const setFormValues = (user) => {
    form.querySelector('[name="firstName"]').value = user.firstName || '';
    form.querySelector('[name="lastName"]').value = user.lastName || '';
    form.querySelector('[name="balance"]').value = user.balance || '';
    form.querySelector('[name="isActive"]').checked = user.isActive || false;
    loaderUser = user;
}

/**
 * 
 * @param {HTMLDivElement} element
 * @param {(userLike) => Promise<void>} callback
 */
export const renderModal = (element, callback) => {
    if (modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';

    modal.addEventListener('click', (event) => {
        if (event.target.className !== 'modal-container') return;
        hideModal();
    })

    form = modal.querySelector('form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const userLike = {...loaderUser};

        for (const [key, value] of formData) {
            if (key === 'balance') {
                userLike[key] = +value // convertir a número
                continue;
            }

            if (key === 'isActive') {
                userLike[key] = (value === 'on') ? true : false // convertir a booleano
                continue;
            }

            userLike[key] = value
        }

        // TODO: guardar data
        await callback(userLike);
        hideModal();
    })

    element.append(modal);
}