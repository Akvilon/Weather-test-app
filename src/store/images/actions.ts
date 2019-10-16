import {ACTION_TYPES} from "./constants";


export const getImages = () => ({
    type: ACTION_TYPES.GET_IMAGES
});

export const setImages = (images) => ({
	type: ACTION_TYPES.SET_IMAGES,
	payload: images
});
