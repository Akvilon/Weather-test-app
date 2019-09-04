import axios from "axios";
import {Store} from "redux";
import {Action} from "../types";
import {ACTION_TYPES} from "./constants";
import { WeatherModel } from '../../models';
import { setUserCoords } from './actions';


const weatherBaseUrl = process.env.REACT_APP_WEATHER_BASE_URL;
const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

const fetchCurrentCity = async (lat: number, lon:number) => {
	try {
		const CURRENT_CITY_URL = `${weatherBaseUrl}/data/2.5/weather?appid=${weatherApiKey}&lat=${lat}&lon=${lon}&units=metric`;
		const response = await axios.get(CURRENT_CITY_URL);
		return response.data;
	}
	catch (e) {
		throw e;
	}
};

const geolocationFailure = (positionError) => {
	if(positionError == 1) {
		console.log('Вы решили не предоставлять данные о своем местоположении, но это не проблема. Мы больше не будем запрашивать их у вас');
	}
	else if(positionError == 2) {
		console.log('Проблемы с сетью или нельзя связаться со службой определения местоположения по каким-либо другим причинам');
	}
	else if(positionError == 3) {
		console.log('He удалось определить местоположение в течение установленного времени');
	}
	else {
		console.log('Загадочная ошибка');
	}
};

const fetchMiddleware = ({ getState, dispatch}: Store) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
    if(action.type === ACTION_TYPES.GET_USER_COORDS) {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition( position => {
					let latitude =  position.coords.latitude;
					let longitude =  position.coords.longitude;

					fetchCurrentCity(latitude, longitude).then((weather: WeatherModel)=>{
						dispatch(setUserCoords(weather))
					})
				}, geolocationFailure);
			}
			else {
				alert('Your browser does not support geolocation');
			}

    }

    next(action);
};


export const homeMiddlewares = [fetchMiddleware];