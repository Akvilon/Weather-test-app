

export default {

		weatherCard: {
			display: 'flex',
			justifyContent: 'space-between',
			padding: '20px',
			boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
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
			},
			'& h3:first-letter': {
				textTransform: 'uppercase'
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
				fontWeight: '600'
			}
		},
		croossInvis: {
			display: 'none'
		}
}