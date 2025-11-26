import { User } from "../models/user.model";

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async (userLike) => {
    const user = new User(userLike);

    // TODO: Falta un mapper

    if (user.id) {
        throw Error('Actualizar usuario no implementado');
        return;
    }

    const updatedUser = await createUser(user);
    return updatedUser;
}

/**
 * 
 * @param {Like<User>} user 
 */
const createUser = async (user) => {
    const url = `${ import.meta.env.VITE_BASE_URL }/users`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    const newUser = await response.json();
    console.log({newUser});

    return newUser;
}