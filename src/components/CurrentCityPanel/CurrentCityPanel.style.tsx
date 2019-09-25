

export default(theme) => ({
	currentCityPanel: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		'& h2':{
			fontWeight: '500',
			color: theme.palette.colors.text
		}
	},
	notYourCity: {
		display: 'flex',
		alignItems: 'center',
		paddingTop: '30px',
		'& h4':{
			fontSize: '0.875em',
			color: theme.palette.colors.text
		},
		'& button': {
			outline: 'none',
			border: 'none',
			background: 'none',
			color: theme.palette.colors.specialText,
			cursor: 'pointer',
			fontSize: '0.875em'
		}
	}
})