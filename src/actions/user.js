import {
    getStockUser,
} from '../utils/_DATA';

export const GET_USER_DATA = "GET_USER_DATA";

export function getStockUserAction() {
    return (dispatch) => getStockUser()
        .then(user => dispatch(getUserData(user)));
}

export const getUserData = (user) => ({ type: GET_USER_DATA, user })