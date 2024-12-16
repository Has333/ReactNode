async function getAllUsers() {
    const request = await fetch(`${import.meta.env.VITE_APIURL}/users`);
    const response = await request.json();
    return response;
}

export function usersInfo() {
    return {
        actions: {
            getAllUsers,
        },
        states: {

        },
    }
}