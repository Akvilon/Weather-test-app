
	export interface Urls {
		raw: string;
		full: string;
		regular: string;
		small: string;
		thumb: string;
	}

	export interface Result {
		id: string;
		description: string;
		urls: Urls;
	}

	export interface CityImage {
		results: Result[];
	}

