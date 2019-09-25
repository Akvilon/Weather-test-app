

export default (theme) => ({
	weatherDetails: {
		position: 'relative',
		minHeight: '100%',
		background: theme.palette.colors.panelColor,
		boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
		margin: '15px 0px'
	},
	weatherDetailsInfo: {
		display: 'flex',
		padding: '15px'
	},
	weatherDetailsInfoImage: {
		'& img': {
			height: '180px'
		}
	},
	weatherDetailsInfoData: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		padding: '30px',
		'& h2': {
			fontSize: '3em',
			color: theme.palette.colors.text,
			'& span': {
				color: theme.palette.colors.specialText
			},
		},
		'& h3': {
			fontSize: '2em',
			color: theme.palette.colors.text,
		},
	},
	weatherDetailsList: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		padding: '15px'
	},
	weatherDetailsCard: {
		width: '24%',
		padding: '15px',
		marginBottom: '15px',
		borderRadius: '2px',
		boxShadow: theme.cards.boxShadow,
		'& h3': {
			fontWeight: '500',
			paddingBottom: '10px',
			color: theme.palette.colors.text
		},
		'& h4': {
			paddingTop: '5px',
			color: theme.palette.colors.text
		},
		'& h5': {
			paddingTop: '5px',
			color: theme.palette.colors.specialText
		},
		'& span': {
			color: theme.palette.colors.specialText
		}
	},
	weatherDetailsConditions: {
		display: 'flex',
		alignItems: 'flex-end',
		'& img': {
			height: '30px',
			width: '30px',
			position: 'relative',
			top: '5px',
			marginLeft: '15px'
		}
	},
	backArrow: {
		position: 'fixed',
		top: '35px',
		left: '345px',
		'& img': {
			height: '45px',
		}
	}
})