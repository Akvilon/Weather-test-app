

export default(theme) => ({

		weatherCard: {
			display: 'flex',
			justifyContent: 'space-between',
			padding: '20px',
			boxShadow: theme.cards.boxShadow,
			borderRadius: '2px',
			cursor: 'pointer',
			zIndex: '1'
		},
		weatherCardInfo: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-around',
			'& h2': {
				fontSize: '20px',
				fontWeight: '600',
				color: theme.palette.colors.text
			},
			'& h3':{
				color: theme.palette.colors.text
			},
			'& h3:first-letter': {
				textTransform: 'uppercase'
			},
		},
		weatherConditions: {
			display: 'flex',
			alignItems: 'flex-end',
			'& img': {
				height: '50px',
				width: '50px',
				position: 'relative',
				top: '12px'
			}
		},
		weatherCardImg: {
			'& img': {
				height: '100px',
				width: '100px',
			}
		},
		cross: {
		  height: '20px',
			width: '20px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			position: 'absolute',
			top: '0px',
			right: '0px',
			zIndex: 10,
			cursor: 'pointer',
			'& span': {
				fontFamily: 'Trebuchet MS',
				fontWeight: '600',
				color: theme.palette.colors.text
			}
		},
		croossInvis: {
			display: 'none'
		}
})