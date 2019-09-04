import {ACTION_TYPES} from "./constants";


export const getUserCoords = () => ({
    type: ACTION_TYPES.GET_USER_COORDS,
});

export const setUserCoords = (coords) => ({
	type: ACTION_TYPES.SET_USER_COORDS,
  payload: coords
});
