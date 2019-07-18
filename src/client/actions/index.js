export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, axiosInstance) => {
    const res = await axiosInstance.get('/users')

    dispatch({
        type: FETCH_USERS,
        payload: res
    })
}

// Will be called 100% of the time so it will be
// integrated into the App component
export const FETCH_CURRENT_USER = 'fetch_current_user'
export const fetchCurrentUser = () => async (dispatch, getState, axiosInstance) => {
    const res = await axiosInstance.get('/current_user')

    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res
    })
}