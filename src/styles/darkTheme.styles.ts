

const colors: DarkPaletteColor = {
	mainColor: '#ffffff',
	panelColor: '#333',
	text: '#fff',
	contrastText: '#333',
	specialText:'#D87606',
	borderText: '#ffffff'
};


export interface DarkPaletteColor {
	mainColor: string;
	panelColor: string;
	text: string;
	contrastText: string;
	specialText: string;
	borderText: string;
}

export interface DarkPalette {
	colors: DarkPaletteColor,
}

export interface DarkTheme {
	palette: DarkPalette;
	panel: {
		boxShadow: string
	}
	cards: {
		boxShadow:string;
	};
	typo: {
		fontFamily: string;
		fontSize: string;
	}
}

export const darkTheme: DarkTheme = {
	palette: {
		colors: colors
	},
	panel:{
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
    },
	cards:{
		boxShadow: '0px 0px 0px 1px #D87606',
	},
	typo: {
		fontFamily: 'Roboto, Helvetica, sans-serif',
		fontSize: '1em'
	}
};