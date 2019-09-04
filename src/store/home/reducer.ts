import {Action} from "../types";
import {ACTION_TYPES} from "./constants";
import { WeatherModel } from '../../models';



export interface HomeState {
	weather: WeatherModel | undefined
}

const INITIAL_STATE = {
	weather: undefined
};


export default (state: HomeState = INITIAL_STATE, action: Action<any>) => {
    switch (action.type) {
        case ACTION_TYPES.SET_USER_COORDS:
            return {...state, weather: action.payload};
        default :
            return state;
    }
}