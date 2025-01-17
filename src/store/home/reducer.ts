import {Action} from "../types";
import {ACTION_TYPES} from "./constants";
import { WeatherDetails, WeatherModel } from '../../models';

export interface HomeState {
	weather: WeatherModel | undefined,
	weatherDetails: WeatherDetails | undefined,
	weatherList: WeatherModel[] | undefined,

}

const INITIAL_STATE = {
	weather: undefined,
	weatherDetails: undefined,
	weatherList: [],
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

	    case ACTION_TYPES.SET_WEATHER_DETAILS:
		    return {...state, weatherDetails: action.payload};

        default :
            return state;
    }
}

