import modalHtml from './render-modal.html?raw'
import './render-modal.css';

let modal, form;

// TODO: cargar usuario por id
export const showModal = () => {
    modal?.classList.remove('hide-modal');
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset();
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
        const userLike = {};

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