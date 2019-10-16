import {Action} from "../types";
import {ACTION_TYPES} from "./constants";
import { CityImage, WeatherDetails, WeatherModel } from '../../models';

export interface ImagesState {
	images: CityImage[] | undefined,
}

const INITIAL_STATE = {
	images: [],
};


export default (state: ImagesState = INITIAL_STATE, action: Action<any>) => {
    switch (action.type) {

			 case ACTION_TYPES.SET_IMAGES:
				return {
					...state,
					images: [...state.images, action.payload]
				};

        default :
            return state;
    }
}

