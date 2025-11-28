import modalHtml from './render-modal.html?raw'
import './render-modal.css';
import { getUserById } from '../../use-cases/get-user-by-id';

let modal, form;
let loaderUser = {};

export const showModal = async (id) => {
    modal?.classList.remove('hide-modal');
    loaderUser = {};

    console.log(`Show modal for id: ${id}`);

    if (!id) return;

    console.log(`Loading user with id: ${id}`);

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
    console.log("Set Form Values");
    console.log({user});
    form.querySelector('[name="firstName"]').value = user.firstName;
    form.querySelector('[name="lastName"]').value = user.lastName;
    form.querySelector('[name="balance"]').value = user.balance;
    form.querySelector('[name="isActive"]').checked = user.isActive;
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
    form = modal.querySelector('form');

    modal.addEventListener('click', (event) => {
        if (event.target.className !== 'modal-container') return;
        hideModal();
    })


    form.addEventListener('submit', async (event) => {

        event.preventDefault();

        const formData = new FormData(form);
        const userLike = {...loaderUser};

        for (const [key, value] of formData) {
            console.log({key, value});
            if (key === 'balance') {
                userLike[key] = +value // convertir a número
                continue;                            
            }

            if (key === 'isActive') {
                console.log(`isActive value: ${value}`);
                userLike[key] = (value === 'on') ? true : false // convertir a booleano
                continue;
            }

            userLike[key] = value
        }

        // Manejar checkbox isActive: si no está en FormData, significa que está desmarcado
        userLike.isActive = form.querySelector('[name="isActive"]').checked;
        await callback(userLike);
        hideModal();
    })

    element.append(modal);
}