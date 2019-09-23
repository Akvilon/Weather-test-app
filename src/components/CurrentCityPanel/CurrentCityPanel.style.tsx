

export default {
	currentCityPanel: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		'& h2':{
			fontWeight: '500'
		},
	},
	notYourCity: {
		display: 'flex',
		alignItems: 'center',
		paddingTop: '30px',
		'& h4':{
			fontSize: '0.875em'
		},
		'& button': {
			outline: 'none',
			border: 'none',
			background: 'none',
			color: '#D87606',
			cursor: 'pointer',
			fontSize: '0.875em'
		}
	}
}