import {ACTION_TYPES} from "./constants";
import {Token} from "../../models";


export const fetchToken = (code: string) => ({
    type: ACTION_TYPES.FETCH_TOKEN,
    payload: code
});

export const setToken = (token: Token) => ({
    type: ACTION_TYPES.SET_TOKEN,
    payload: token
});

export const readToken = () => ({
	type: ACTION_TYPES.READ_TOKEN,
});

export const clearToken = () => ({
    type: ACTION_TYPES.CLEAR_TOKEN,
});
