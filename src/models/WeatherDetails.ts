import { Clouds, Coords, Sys, Wind } from './Weather';

export interface WeatherInfo {
	description: string
	icon: string;
	id: number;
	main: string;
}

export interface MainDetails {
	grnd_level: number;
	humidity: number;
	pressure: number;
	sea_level: number;
	temp: number;
	temp_kf: number;
	temp_max: number;
	temp_min: number;
}

export interface List {
	clouds: Clouds;
	dt: number;
	dt_txt: string;
	main: MainDetails;
	sys: Sys;
	weather: WeatherInfo[]
	wind: Wind
}

export interface City {
	coords: Coords;
	country: string;
	id: number;
	name: string;
	population: number;
	sunrise: number;
	sunset: number;
	timezone: number;
}

export interface WeatherDetails {
	city: City;
	cnt: number;
	cod: string;
	list: List[];
	message: number;
}