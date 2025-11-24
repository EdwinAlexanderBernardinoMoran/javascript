import { userToModel } from "../mappers/user.mapper";

/**
 * 
 * @param {Number} page
 * @return {Promise<User[]>}
 */
export const loadUsersByPage = async (page = 1) => {
    const url = `${ import.meta.env.VITE_BASE_URL }/users?_page=${page}`;

    const response = await fetch(url)
    const {data} = await response.json()

    const users = data.map(userApi => userToModel(userApi));

    return users;
}