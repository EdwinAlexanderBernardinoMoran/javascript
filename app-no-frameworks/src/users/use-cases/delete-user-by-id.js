/**
 * 
 * @param {String|Number} id 
 */
export const deleteUserById = async (id) => {
    const url = `${ import.meta.env.VITE_BASE_URL }/users/${ id }`;
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const deleteResolve = await response.json();
    console.log({deleteResolve});

    return true;
}