import {
    GET_USER_DATA,
} from '../actions/user';

export default function user (state = {}, action) {
    switch (action.type) {
        case GET_USER_DATA:
            return action.user;
        default:
            return state;
    }
}