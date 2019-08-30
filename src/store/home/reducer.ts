import {Action} from "../types";
import {ACTION_TYPES} from "./constants";



export interface HomeState {

}

const INITIAL_STATE = {

};


export default (state: HomeState = INITIAL_STATE, action: Action<any>) => {
    switch (action.type) {
        case ACTION_TYPES.SET_PROFILE:
            return {...state, profileInfo: action.payload};
        default :
            return state;
    }
}