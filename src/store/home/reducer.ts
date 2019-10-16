import {Action} from "../types";
import {ACTION_TYPES} from "./constants";
import { WeatherDetails, WeatherModel } from '../../models';

export interface HomeState {
	weather: WeatherModel | undefined,
	weatherDetails: WeatherDetails | undefined,
	weatherList: WeatherModel[] | undefined,
	activeTheme: string
}

const INITIAL_STATE = {
	weather: undefined,
	weatherDetails: undefined,
	weatherList: [],
	activeTheme: undefined,
};


export default (state: HomeState = INITIAL_STATE, action: Action<any>) => {
    switch (action.type) {
			 case ACTION_TYPES.SET_WEATHER_LIST:
				 return {...state, weatherList: action.payload};


	    case ACTION_TYPES.OVERWRITE_WEATHER_LIST:
		    return {...state, weatherList: action.payload};

	    case ACTION_TYPES.SET_WEATHER_DETAILS:
		    return {...state, weatherDetails: action.payload};

			 case ACTION_TYPES.SET_NEW_WEATHER_LIST_ITEM:
				 return {
					 ...state,
					 weatherList: [action.payload, ...state.weatherList]
				 };



        case ACTION_TYPES.SET_USER_CITY_WEATHER:
            return {...state, weather: action.payload};


	    case ACTION_TYPES.SET_ACTIVE_THEME:
		    return {...state, activeTheme: action.payload};

        default :
            return state;
    }
}

