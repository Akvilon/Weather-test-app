import axios from "axios";
import {Store} from "redux";
import {Action} from "../types";
import {ACTION_TYPES} from "./constants";
import { Token, Weather, WeatherModel } from '../../models';
import { setUserCityImage, setUserCityWeather, setWeatherList } from './actions';
import { CityImage } from '../../models/CityImage';


const weatherBaseUrl = process.env.REACT_APP_WEATHER_BASE_URL;
const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

const unsplashBaseUrl = process.env.REACT_APP_BASE_URL;


const fetchWeather = async () => {

};

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


const fetchCityImage = async (accessToken: string, cityName: string) => {
	try {
		const CITY_PHOTOS_URL = `${unsplashBaseUrl}search/photos?page=1&per_page=1&access_token=${accessToken}&query=${cityName}&orientation=squarish`;
		const response = await axios.get<CityImage>(CITY_PHOTOS_URL);
		return response.data;
	}
	catch (e) {
		throw e;
	}
};



const fetchMiddleware = ({ getState, dispatch}: Store) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
    if(action.type === ACTION_TYPES.GET_USER_CITY_WEATHER) {
    	// GET LATITUDE AND LONGITUDE OF CURRENT USER CITY
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition( position => {
					let latitude =  position.coords.latitude;
					let longitude =  position.coords.longitude;

					// SEARCHING USER CURRENT CITY WEATHER
					fetchCurrentCity(latitude, longitude).then((weather: WeatherModel)=>{
						// SET WEATHER TO THE STORE
						dispatch(setUserCityWeather(weather));

						// GET ACCESS TOKEN FOR NEXT QUERY
						const state = getState();
						const accessToken = state.auth.token.access_token;
						// GET THE NAME OF THE CITY
						const cityName = weather.name;
						// SEARCHING CITY IMAGE
						fetchCityImage(accessToken, cityName).then((image: CityImage) => {
							const imageResults = image.results[0];
							// SET IMAGE TO THE STORE
							dispatch(setUserCityImage(imageResults));
						})
					})
				}, geolocationFailure);
			}
			else {
				alert('Your browser does not support geolocation');
			}
    }
		else if(action.type === ACTION_TYPES.GET_WEATHER_LIST) {
			try {
				const URLS = [
					`${weatherBaseUrl}/data/2.5/weather?appid=${weatherApiKey}&q=London&units=metric`,
					`${weatherBaseUrl}/data/2.5/weather?appid=${weatherApiKey}&q=Barcelona&units=metric`,
					`${weatherBaseUrl}/data/2.5/weather?appid=${weatherApiKey}&q=Rome&units=metric`,
					`${weatherBaseUrl}/data/2.5/weather?appid=${weatherApiKey}&q=Berlin&units=metric`,
					`${weatherBaseUrl}/data/2.5/weather?appid=${weatherApiKey}&q=Paris&units=metric`,
					`${weatherBaseUrl}/data/2.5/weather?appid=${weatherApiKey}&q=Madrid&units=metric`,
					`${weatherBaseUrl}/data/2.5/weather?appid=${weatherApiKey}&q=Kiev&units=metric`,
					`${weatherBaseUrl}/data/2.5/weather?appid=${weatherApiKey}&q=Prague&units=metric`,
					`${weatherBaseUrl}/data/2.5/weather?appid=${weatherApiKey}&q=Amsterdam&units=metric`,
					`${weatherBaseUrl}/data/2.5/weather?appid=${weatherApiKey}&q=Istanbul&units=metric`
				];

				const queryArr = URLS.map(url => axios.get<Weather>(url));
				axios.all(queryArr).then(function ( results ) {
					let weatherList = results.map(weather=>weather.data);
					dispatch(setWeatherList(weatherList))
				});
			}
			catch (e) {
				throw e;
			}
		}

    next(action);
};


export const homeMiddlewares = [fetchMiddleware];