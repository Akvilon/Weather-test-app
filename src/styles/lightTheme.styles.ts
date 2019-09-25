

const colors: lightPaletteColor = {
	mainColor: '#D87606',
	panelColor: '#ffffff',
	text: '#333',
	contrastText: '#ffffff',
	specialText:'#D87606',
	borderText: '#D87606'
};

export interface lightPaletteColor {
		mainColor: string;
		panelColor: string;
    text: string;
    contrastText: string;
		specialText: string;
		borderText: string;
}

export interface lightPalette {
	colors: lightPaletteColor,
}

export interface lightTheme {
    palette: lightPalette;
    cards: {
	    boxShadow:string;
    };
    typo: {
        fontFamily: string;
        fontSize: string;
    }
}

export const lightTheme: lightTheme = {
    palette: {
        colors: colors,
    },
		cards:{
    	boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
		},
    typo: {
        fontFamily: 'Roboto, Helvetica, sans-serif',
        fontSize: '1em'
    }
};