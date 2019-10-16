import {ACTION_TYPES} from "./constants";

export const setActiveTheme = (theme) => ({
	type: ACTION_TYPES.SET_ACTIVE_THEME,
	payload: theme
});
