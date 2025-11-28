import { User } from "../models/user.model";

/**
 * 
 * @param {User} user 
 */
export const userModelToReverse = (user) => {
    const {id, isActive, balance, avatar, firstName, lastName} = user;

    return {
        id,
        isActive,
        balance,
        avatar,
        first_name: firstName,
        last_name: lastName
    }
}