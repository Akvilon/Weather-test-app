import {Action} from "../types";
import {ACTION_TYPES} from "./constants";
import { WeatherModel } from '../../models';
import { CityImage } from '../../models/CityImage';



export interface HomeState {
	weather: WeatherModel | undefined,
	weatherList: WeatherModel[] | undefined,
	imageResults: CityImage | undefined
}

const INITIAL_STATE = {
	weather: undefined,
	weatherList: undefined,
	imageResults: undefined
};


export default (state: HomeState = INITIAL_STATE, action: Action<any>) => {
    switch (action.type) {
			case ACTION_TYPES.SET_WEATHER_LIST:
						return {...state, weatherList: action.payload};
			case ACTION_TYPES.SET_NEW_WEATHER_LIST_ITEM:
				return {
					...state,
					weatherList: [action.payload, ...state.weatherList]
				};
        case ACTION_TYPES.SET_USER_CITY_WEATHER:
            return {...state, weather: action.payload};
			case ACTION_TYPES.SET_USER_CITY_IMAGE:
						return {...state, imageResults: action.payload};
        default :
            return state;
    }
}

