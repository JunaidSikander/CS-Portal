import {
    SIGN_IN_USER_FAIL,
    SIGN_IN_USER_REQUEST,
    SIGN_IN_USER_SUCCESS,
    SIGN_UP_USER_FAIL,
    SIGN_UP_USER_REQUEST,
    SIGN_UP_USER_SUCCESS,
    USER_LOG_OUT
} from "../types";


export const signupReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGN_UP_USER_REQUEST:
            return {loading: true};
        case SIGN_UP_USER_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case SIGN_UP_USER_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGN_IN_USER_REQUEST:
            return {loading: true};
        case SIGN_IN_USER_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case SIGN_IN_USER_FAIL:
            return {loading: false, error: action.payload};
        case USER_LOG_OUT:
            return {};
        default:
            return state;
    }
};