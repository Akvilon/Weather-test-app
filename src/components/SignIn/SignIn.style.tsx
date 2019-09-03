

export default {
    signInWrap: {
        display: 'flex',
      	height: '100%',
        position: 'relative',
			  justifyContent: 'center'
    },
    signIn: {
        padding: '30px',
        height: '300px',
        width: '300px',
        margin: 'auto',
        background: '#fff',
        borderRadius: '4px',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        '& h2': {
            textAlign: 'right',
            fontSize: '20px',
					  color: '#333',
            paddingTop: '10px'
        },
			  '& h3': {
            fontSize: '20px',
					  color: '#333'
			  },
        '& a': {
            display: 'block',
            textDecoration: 'none',
            fontSize: '1.5em',
            color: '#333',
            textAlign: 'center',
            marginTop: '70px'
        }
    },
    signInLogo: {
        position: 'absolute',
        top: '15%',
			animationName: '$moveCloud',
			animationDuration: '4s',
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
			transform: 'translate(0px)'
		},
		to: {
			transform: 'translate(20px)'
		}
	},
}