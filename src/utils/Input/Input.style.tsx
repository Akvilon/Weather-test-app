

export default (theme) => ({
	weatherappInput: {
		'& input':{
			height: '40px',
			width: 'auto',
			marginRight: '15px',
			padding: '0',
			paddingLeft: '15px',
			outline: 'none',
			borderRadius: '4px',
			border: `1px solid ${theme.palette.colors.borderText}`,
			color: '#333'
		}
	}
})