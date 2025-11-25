import modalHtml from './render-modal.html?raw'
import './render-modal.css';

let modal, form;

// TODO: cargar usuario por id
export const showModal = () => {
    modal?.classList.remove('hide-modal');
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');

    // TODO: reset formulario
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderModal = (element) => {
    if (modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';

    modal.addEventListener('click', (event) => {
        if (event.target.className !== 'modal-container') return;
        hideModal();
    })

    form = modal.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
    })

    element.append(modal);
}