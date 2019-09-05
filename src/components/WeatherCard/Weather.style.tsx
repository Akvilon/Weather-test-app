

export default {
		weatherCard: {
			minHeight: '130px',
			display: 'flex',
			justifyContent: 'space-between',
			padding: '15px',
			boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
			borderRadius: '2px'
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
			display: 'flex',
			alignItems: 'center',
			width: '100px',
			background: '#CFCFCF',
			fontSize: '12px',
			textAlign: 'center'
		}
}