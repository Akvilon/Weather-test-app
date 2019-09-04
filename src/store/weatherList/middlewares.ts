import axios from "axios";
import {Store} from "redux";
import {Action} from "../types";
import {ACTION_TYPES} from "./constants";
import { Token } from '../../models';


const weatherBaseUrl = process.env.REACT_APP_WEATHER_BASE_URL;
const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

const fetchWeatherList = async (code: string) => {
	try {
		const AUTH_URL = `${weatherBaseUrl}data/2.5/group?id=524901,703448,2643743&units=metric`;
		const response = await axios.post<Token>(AUTH_URL);
		console.log(response);
		return response.data;
	}
	catch (e) {
		throw e;
	}
};

const fetchMiddleware = ({ getState, dispatch}: Store) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
    if(action.type === ACTION_TYPES.FETCH_WEATHERLIST) {

    }

    next(action);
};


export const homeMiddlewares = [fetchMiddleware];