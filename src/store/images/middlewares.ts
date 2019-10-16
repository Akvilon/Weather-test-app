import axios from "axios";
import {Store} from "redux";
import {Action} from "../types";
import {ACTION_TYPES} from "./constants";

const pixabayBaseUrl = process.env.REACT_APP_PIXABAY_BASE_URL;
const pixabayApiKey = process.env.REACT_APP_PIXABAY_API_KEY;

const fetchCityImage = async (cityName: string) => {
	try {
		const CITY_PHOTOS_URL = `${pixabayBaseUrl}?key=${pixabayApiKey}&q=${cityName}&image_type=photo&category=buildings&page=1&per_page=3`;
		const response = await axios.get(CITY_PHOTOS_URL);
		return response.data;
	}
	catch (e) {
		throw e;
	}
};

const fetchMiddleware = ({ getState, dispatch}: Store) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
	if(action.type === ACTION_TYPES.GET_IMAGES) {
			const state = getState();
			const city = state.home.weather.name;
	}


	next(action);
};


export const imagesMiddlewares = [fetchMiddleware];