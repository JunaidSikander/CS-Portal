import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import {loginReducer as userLogin, signupReducer as userSignup} from './reducers/userReducer'


const reducer = combineReducers({
    userSignup,
    userLogin

});

let middleware = [];

if (process.env.NODE_ENV === "development") {
    middleware = [...middleware, thunk]
}

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;


const initialState = {
    userLogin: {userInfo: userInfoFromStorage}
};

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;