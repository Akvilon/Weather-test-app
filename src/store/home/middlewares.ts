import axios from "axios";
import {Store} from "redux";
import {Action} from "../types";
import {ACTION_TYPES} from "./constants";
import { WeatherModel } from '../../models';
import { setNewWeatherListItem, setUserCityImage, setUserCityWeather, setWeatherList } from './actions';
import { CityImage } from '../../models/CityImage';


const weatherBaseUrl = process.env.REACT_APP_WEATHER_BASE_URL;
const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

const unsplashBaseUrl = process.env.REACT_APP_BASE_URL;

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
	`${weatherBaseUrl}/data/2.5/weather?appid=${weatherApiKey}&q=Istanbul&units=metric`,
	`${weatherBaseUrl}/data/2.5/weather?appid=${weatherApiKey}&q=Warsaw&units=metric`,
	`${weatherBaseUrl}/data/2.5/weather?appid=${weatherApiKey}&q=Brussels&units=metric`
];

const fetchCityWeather = async (name: string) => {
	try {
		const CITY_WEATHER_URL = `${weatherBaseUrl}/data/2.5/weather?appid=${weatherApiKey}&q=${name}&units=metric`;
		const response = await axios.get(CITY_WEATHER_URL);
		URLS.unshift(CITY_WEATHER_URL);
		console.log('UUU',URLS);
		return response.data;
	}
	catch (e) {
		throw e;
	}

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
						fetchCityImage(accessToken, cityName).then((response: CityImage) => {
							if (response.results.length > 0) {
								const image = response.results[0].urls;
								// SET IMAGE TO THE STORE
								dispatch(setUserCityImage(image));
							}
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
				console.log('URLS=',URLS);
				const queryArr = URLS.map(url => axios.get<WeatherModel>(url));

				axios.all(queryArr).then(function ( results ) {
					let weatherList = results.map(weather=>weather.data);
					dispatch(setWeatherList(weatherList));

					const state = getState();
					const accessToken = state.auth.token.access_token;

					const newArrr = [];
					weatherList.map((item)=>{
						fetchCityImage(accessToken, item.name).then((response: CityImage) => {
							if (response.results.length > 0) {
								newArrr.push(response.results);

								// SET IMAGE TO THE STORE
								// dispatch(setUserCityImage(image));
							}
						})
					});

					console.log('newArrr =',newArrr);
				});
			}
			catch (e) {
				throw e;
			}
		}
    else if(action.type === ACTION_TYPES.GET_NEW_WEATHER_LIST_ITEM) {
				fetchCityWeather(action.payload).then((res)=>{
					dispatch(setNewWeatherListItem(res));
				});
		}
		else if(action.type === ACTION_TYPES.DELETE_ITEM) {
    	const state = getState();
    	const list = state.home.weatherList;
    	const id = action.payload;

    	const index = list.findIndex((el)=> el.id === id);
			const newWeatherList = [
				...list.slice(0, index),
				...list.slice(index + 1)
			];

			dispatch(setWeatherList(newWeatherList));

		}

    next(action);
};


export const homeMiddlewares = [fetchMiddleware];