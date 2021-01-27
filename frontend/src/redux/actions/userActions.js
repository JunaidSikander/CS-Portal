import axios from "axios";
import {
    SIGN_IN_USER_FAIL,
    SIGN_IN_USER_REQUEST,
    SIGN_IN_USER_SUCCESS,
    SIGN_UP_USER_FAIL,
    SIGN_UP_USER_REQUEST,
    SIGN_UP_USER_SUCCESS,
    USER_LOG_OUT
} from "../types";


export const SignUp = (email, password, secretKey, name) => async dispatch => {
    try {
        dispatch({type: SIGN_UP_USER_REQUEST});

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const {data} = await axios.post('/api/user', {email, password, secretKey, name}, config);

        dispatch({
            type: SIGN_UP_USER_SUCCESS,
            payload: data
        });

        dispatch({
            type: SIGN_IN_USER_SUCCESS,
            payload: data
        });

        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (e) {
        dispatch({
            type: SIGN_UP_USER_FAIL,
            payload: e.response && e.response.data.message ? e.response.data.message : e.message
        })
    }
};

export const login = (email, password, secretKey) => async dispatch => {
    try {
        dispatch({type: SIGN_IN_USER_REQUEST});

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const {data} = await axios.post('/api/user/login', {email, password, secretKey}, config);

        dispatch({
            type: SIGN_IN_USER_SUCCESS,
            payload: data
        });

        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (e) {
        dispatch({
            type: SIGN_IN_USER_FAIL,
            payload: e.response && e.response.data.message ? e.response.data.message : e.message
        })
    }
};

export const logout = () => dispatch => {
    localStorage.removeItem('userInfo');
    dispatch({type: USER_LOG_OUT});
};