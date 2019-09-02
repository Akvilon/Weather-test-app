import {ACTION_TYPES} from "./constants";
import {WeatherList} from "../../models";


export const fetchWeatherList = () => ({
    type: ACTION_TYPES.FETCH_WEATHERLIST,
});

export const setWeatherList = (weatherList: WeatherList) => ({
     type: ACTION_TYPES.SET_WEATHERLIST,
     payload: weatherList
});


