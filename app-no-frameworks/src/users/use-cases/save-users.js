import { userModelToReverse } from "../mappers/user-reverse";
import { userToModel } from "../mappers/user.mapper";
import { User } from "../models/user.model";

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async (userLike) => {
    const user = new User(userLike)

    // Mapper
    const userToSave = userModelToReverse(user);

    let userUpdated;

    if (user.id) {
        userUpdated = await updateUser(userToSave);
    } else {
        userUpdated = await createUser(userToSave);
    }

    return userToModel(userUpdated);
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

/**
 * 
 * @param {Like<User>} user 
 */
const updateUser = async (user) => {
    const url = `${ import.meta.env.VITE_BASE_URL }/users/${ user.id }`;
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    const updatedUser = await response.json();
    console.log({updatedUser});

    return updatedUser;
}