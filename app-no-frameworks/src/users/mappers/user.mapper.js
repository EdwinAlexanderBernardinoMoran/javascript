import { User } from "../models/user.model"

/**
 * 
 * @param {User<User>} userApi 
 * @returns {User}
 */
export const userToModel = (userApi) => {
    const {id, isActive, balance, avatar, first_name, last_name, gender } = userApi;

    return new User({
        id,
        isActive,
        balance,
        avatar,
        firstName: first_name,
        lastName: last_name,
        gender
    })
}