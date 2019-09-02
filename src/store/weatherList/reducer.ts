import {Action} from "../types";
import {ACTION_TYPES} from "./constants";



export interface HomeState {

}

const INITIAL_STATE = {
    weatherList: undefined
};


export default (state: HomeState = INITIAL_STATE, action: Action<any>) => {
    switch (action.type) {
        case ACTION_TYPES.SET_WEATHERLIST:
            return {...state, weatherList: action.payload};
        default :
            return state;
    }
}