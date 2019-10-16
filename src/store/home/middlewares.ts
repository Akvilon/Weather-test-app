import axios from "axios";
import {Store} from "redux";
import {Action} from "../types";
import {ACTION_TYPES} from "./constants";
import { WeatherDetails, WeatherModel } from '../../models';
import {
	setWeatherList,
	setNewWeatherListItem,
	setWeatherDetails
} from './actions';
import { getLocalStorage, setLocalStorage } from '../../utils/storage';


const weatherBaseUrl = process.env.REACT_APP_WEATHER_BASE_URL;
const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

const LIST = 'LIST';

const URLS = [
	`${weatherBaseUrl}/data/2.5/weather?appid=${weatherApiKey}&q=London&units=metric`,
	`${weatherBaseUrl}/data/2.5/weather?appid=${weatherApiKey}&q=Barcelona&units=metric`,
	`${weatherBaseUrl}/data/2.5/weather?appid=${weatherApiKey}&q=Milano&units=metric`,
	`${weatherBaseUrl}/data/2.5/weather?appid=${weatherApiKey}&q=Berlin&units=metric`,
	`${weatherBaseUrl}/data/2.5/weather?appid=${weatherApiKey}&q=Paris&units=metric`,
	`${weatherBaseUrl}/data/2.5/weather?appid=${weatherApiKey}&q=Madrid&units=metric`,
	`${weatherBaseUrl}/data/2.5/weather?appid=${weatherApiKey}&q=Washington&units=metric`,
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
		return response.data;
	}
	catch (e) {
		alert('Wrong city name');
		throw e;
	}
};

const fetchWeatherDetails = async (id: string) => {
	try {
		const CITY_WEATHER_DETAILS_URL = `${weatherBaseUrl}/data/2.5/forecast?id=${id}&units=metric&appid=${weatherApiKey}`;
		const response = await axios.get<WeatherDetails>(CITY_WEATHER_DETAILS_URL);
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

const fetchMiddleware = ({ getState, dispatch}: Store) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
    if(action.type === ACTION_TYPES.GET_USER_CITY_WEATHER) {

	    const data = JSON.parse(getLocalStorage(LIST));
	    if(data && data.find(el => el.marker === 'user')){
		    return;
	    }
    	// GET LATITUDE AND LONGITUDE OF CURRENT USER CITY
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition( position => {
					let latitude =  position.coords.latitude;
					let longitude =  position.coords.longitude;
					// SEARCHING USER CURRENT CITY WEATHER
					fetchCurrentCity(latitude, longitude).then((weather: WeatherModel)=>{
						weather.marker = 'user';
						// SET WEATHER TO THE STORE
						dispatch(setNewWeatherListItem(weather));

						const data = JSON.parse(getLocalStorage(LIST));
						if(data) {
							if(data.find(el => el.name === weather.name)) {
								return
							}else {
								const newLocalList = [weather, ...data];
								setLocalStorage(LIST, JSON.stringify(newLocalList));
							}
						}
					})
				}, geolocationFailure);
			}
			else {
				alert('Your browser does not support geolocation');
			}
	}

	else if(action.type === ACTION_TYPES.SEARCH_USER_CITY_WEATHER ){
	    fetchCityWeather(action.payload).then((res)=>{
	    	const state = getState();
	    	const list = state.home.weatherList;
	    	const isAlreadyInList = list.find(el => el.id === res.id);

	    	if(isAlreadyInList){
	    		alert('You already have this city in list below')
		    }else {
			    res.marker = 'user';

			    dispatch(setNewWeatherListItem(res));

			    const data = JSON.parse(getLocalStorage(LIST));
			    const newLocalList = [res, ...data];
			    setLocalStorage(LIST, JSON.stringify(newLocalList));
		    }

	    });
	}

	else if(action.type === ACTION_TYPES.GET_WEATHER_LIST) {
			try {
				const json = getLocalStorage(LIST);
				if(json) {
					const list = JSON.parse(json);
					dispatch(setWeatherList(list));

				} else {
					const queryArr = URLS.map(url => axios.get<WeatherModel>(url));

					axios.all(queryArr).then(function ( results ) {
						const listArr = [];
						results.map(weather=>weather.data)
									 .map(obj => {
									 	  obj.marker = 'list';
									 	  listArr.push(obj);
									 });
						dispatch(setWeatherList(listArr));

						const list = JSON.stringify(listArr);
						setLocalStorage(LIST, list);
					});
				}
			}
			catch (e) {
				throw e;
			}
		}
    else if (action.type === ACTION_TYPES.GET_WEATHER_DETAILS) {
	    fetchWeatherDetails(action.payload).then((res)=>{

		    const cardDetails = JSON.stringify(res);
		    setLocalStorage('details', cardDetails);
		    dispatch(setWeatherDetails(res));
	    });
    }
    else if(action.type === ACTION_TYPES.GET_NEW_WEATHER_LIST_ITEM) {
    	const state = getState();
	    const list = state.home.weatherList;
	    const cityNames = list.map(city => city.name.toUpperCase());

	    if(cityNames.indexOf(action.payload) !== -1) {
				alert('You already have this city in your list');
	    }else {
		    fetchCityWeather(action.payload).then((res)=>{
			    const state = getState();
			    const list = state.home.weatherList;
			    res.marker = 'list';
			    const newArr = [res, ...list];
			    dispatch(setWeatherList(newArr));
		    });
	    }
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

	    const data = JSON.parse(getLocalStorage(LIST));
	    const localIndex = data.findIndex((el)=> el.id === id);
	    const newLocalWeatherList = [
		    ...data.slice(0, localIndex),
		    ...data.slice(index + 1)
	    ];
			dispatch(setWeatherList(newWeatherList));

	    const localList = JSON.stringify(newLocalWeatherList);
	    setLocalStorage(LIST, localList);
	}

    next(action);
};


export const homeMiddlewares = [fetchMiddleware];