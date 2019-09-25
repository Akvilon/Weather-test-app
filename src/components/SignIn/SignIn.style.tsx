

export default (theme) => ({
    signInWrap: {
        display: 'flex',
			  flexDirection: 'column',
      	height: '100%',
        position: 'relative',
			  alignItems: 'center',
			  justifyContent: 'center'
    },
		signInInner: {
			width: '300px',
			marginTop: '-140px',

		},
    signIn: {
    		display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
        padding: '30px',
        borderRadius: '4px',
	      background: theme.palette.colors.panelColor,
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        '& h2': {
            fontSize: '20px',
					  color: theme.palette.colors.text,
            padding: '10px 0px 30px',
        },
			  '& h3': {
            fontSize: '20px',
					  color: theme.palette.colors.text
			  },

    },
    signInLogo: {

			animationName: '$moveCloud',
			animationDuration: '10s',
			animationDirection: 'alternate',
			animationTimingFunction: 'linear',
			animationIterationCount: 'infinite',
        '& img': {
            height: '150px',
            width: '150px'
      }
    },
	'@keyframes moveCloud': {
		from: {
			transform: 'translate(50px)'
		},
		to: {
			transform: 'translate(100px)'
		}
	},
})