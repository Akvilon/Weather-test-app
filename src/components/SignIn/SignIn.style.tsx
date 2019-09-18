

export default {
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
        background: '#fff',
        borderRadius: '4px',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        '& h2': {
            fontSize: '20px',
					  color: '#333',
            padding: '10px 0px 30px',
        },
			  '& h3': {
            fontSize: '20px',
					  color: '#333'
			  },
        '& a': {
            display: 'block',
            textDecoration: 'none',
            fontSize: '1.5em',
            color: '#fff',
            textAlign: 'center',
        }
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
}