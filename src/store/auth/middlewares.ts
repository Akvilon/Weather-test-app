import { Store } from "redux";
import { Action } from "../types";
import { ACTION_TYPES } from "./constants";
import { Token } from "../../models";
import axios from "axios";
import { setToken } from "./actions";
import { push } from "connected-react-router";

const key = process.env.REACT_APP_CLIENT_ID;
const secretKey = process.env.REACT_APP_SECRET_KEY;
const authUrl = process.env.REACT_APP_AUTH_URL;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;


const fetchToken = async (code: string) => {
    try {
        const AUTH_URL = `${authUrl}?client_id=${key}&client_secret=${secretKey}&redirect_uri=${redirectUri}&code=${code}&grant_type=${'authorization_code'}`;
        const response = await axios.post<Token>(AUTH_URL);
        console.log(response);
        return response.data;
    }
    catch (e) {
        throw e;
    }
};

const fetchMiddleware = ({ dispatch }: Store) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
    if (action.type === ACTION_TYPES.FETCH_TOKEN) {
        const code = action.payload;
        fetchToken(code).then((token: Token) => {
            dispatch(setToken(token));
            dispatch(push('/'));
        });
    }

    next(action);
};

export const authMiddlewares = [fetchMiddleware];