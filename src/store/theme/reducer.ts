import {Action} from "../types";
import {ACTION_TYPES} from "./constants";

export interface ThemeState {
	activeTheme: string
}

const INITIAL_STATE = {
	activeTheme: undefined,
};


export default (state: ThemeState = INITIAL_STATE, action: Action<any>) => {
	switch (action.type) {

		case ACTION_TYPES.SET_ACTIVE_THEME:
			return {...state, activeTheme: action.payload};

		default :
			return state;
	}
}