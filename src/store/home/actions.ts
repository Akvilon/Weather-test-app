import {ACTION_TYPES} from "./constants";


export const getUserCityWeather = () => ({
    type: ACTION_TYPES.GET_USER_CITY_WEATHER
});

export const setUserCityWeather = (weather) => ({
	type: ACTION_TYPES.SET_USER_CITY_WEATHER,
  	payload: weather
});

export const setUserCityImage = (image) => ({
	type: ACTION_TYPES.SET_USER_CITY_IMAGE,
	payload: image
});

export const getWeatherList = () => ({
	type: ACTION_TYPES.GET_WEATHER_LIST
});

export const setWeatherList = (weatherList) => ({
	type: ACTION_TYPES.SET_WEATHER_LIST,
	payload: weatherList
});


export const getNewWeatherListItem = (item) => ({
	type: ACTION_TYPES.GET_NEW_WEATHER_LIST_ITEM,
	payload: item
});

export const setNewWeatherListItem = (item) => ({
	type: ACTION_TYPES.SET_NEW_WEATHER_LIST_ITEM,
	payload: item
});

export const deleteItem = (id) => ({
	type: ACTION_TYPES.DELETE_ITEM,
	payload: id
});

export const searchUserCity = (item) => ({
	type: ACTION_TYPES.SEARCH_USER_CITY_WEATHER,
	payload: item
});

export const getWeatherDetails = (name) => ({
	type: ACTION_TYPES.GET_WEATHER_DETAILS,
	payload: name
});
export const setWeatherDetails = (details) => ({
	type: ACTION_TYPES.SET_WEATHER_DETAILS,
	payload: details
});