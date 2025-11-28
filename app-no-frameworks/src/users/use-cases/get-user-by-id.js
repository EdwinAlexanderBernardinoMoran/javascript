import { userToModel } from "../mappers/user.mapper";
import { User } from "../models/user.model";

/**
 * 
 * @param {Number} page
 * @return {Promise<User>}
 */
export const getUserById = async (id) => {
    const url = `${ import.meta.env.VITE_BASE_URL }/users/${id}`;

    const response = await fetch(url)
    const data = await response.json()

    const user = userToModel(data);
    console.log(user)

    return user;
}