import {Action} from "../types";
import {ACTION_TYPES} from "./constants";
import { Image, WeatherModel } from '../../models';

export interface HomeState {
	weather: WeatherModel | undefined,
	weatherList: WeatherModel[] | undefined,
	images: Image[]
}

const INITIAL_STATE = {
	weather: undefined,
	weatherList: undefined,
	images: undefined
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
						return {
							...state,
							images: [...state.images, action.payload ]
						};

        default :
            return state;
    }
}

