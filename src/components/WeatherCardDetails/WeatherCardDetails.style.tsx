

export default {
	weatherDetails: {
		position: 'relative',
		height: '100%'
	},
	weatherDetailsInfo: {
		display: 'flex',
		paddingTop: '15px'
	},
	weatherDetailsInfoImage: {
		'& img': {
			height: '200px'
		}
	},
	weatherDetailsInfoData: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		padding: '30px',
		'& h2': {
			fontSize: '3em',
			color: '#333',
			'& span': {
				color: '#D87606'
			},
		},
		'& h3': {
			fontSize: '2em',
			color: '#333',
		},
	},
	weatherDetailsList: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		paddingTop: '15px'
	},
	weatherDetailsCard: {
		width: '24%',
		padding: '15px',
		marginBottom: '15px',
		borderRadius: '2px',
		boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
		'& h3': {
			fontWeight: '500',
			paddingBottom: '10px'
		},
		'& h4': {
			paddingTop: '5px'
		},
		'& h5': {
			paddingTop: '5px',
			color: '#D87606'
		},
		'& span': {
			color: '#D87606'
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
}