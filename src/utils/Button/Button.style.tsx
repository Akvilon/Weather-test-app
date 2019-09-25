

export default (theme) => ({
	weatherappBtn: {
		'& button':{
			minHeight: '40px',
			padding: '0px 15px',
			border: 'none',
			outline: 'none',
			borderRadius: '4px',
			background: theme.palette.colors.mainColor,
			color: theme.palette.colors.contrastText,
			cursor: 'pointer',
			boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',

				'& a': {
					display: 'block',
					textDecoration: 'none',
					fontSize: '1.5em',
					color: theme.palette.colors.contrastText,
					textAlign: 'center',
				}

		}
	}
});