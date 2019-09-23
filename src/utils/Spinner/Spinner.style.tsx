

export default {
	spinnerWrapper: {
		position: 'absolute',
		top: '0',
		bottom: '0',
		left: '0',
		right: '0',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		background: 'rgba(255,255,255, 0.6)'
	},
	spinnerInner:{
		position: 'relative',
		display: 'flex',
		alignItems: 'center'
	},
	spinner: {
		animationName: '$rotate',
		animationDuration: '12s',
		animationTimingFunction: 'linear',
		animationIterationCount: 'infinite',
		'& img': {
			height: '180px',
			width: '180px',
		}
	},
	'@keyframes rotate': {
		from: {
			transform: 'rotate(0deg)'
		},
		to: {
			transform: 'rotate(360deg)'
		}
	},
	spinnerCircle: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		top: '62px',
		left: '60px',
		height: '62px',
		width: '62px',
		borderRadius: '100%',

		'& span': {
			color: '#fff',
			fontSize: '12px',
			letterSpacing: '0.2px'
		}
	},
	spinnerCircleLayout: {
		position: 'absolute',
		display: 'flex',
		top:'19px',
		bottom: '0px',
		right: '0px',
		height: '20px',
		width: '100%',
		background: '#D87606',
		animationName: '$textAppear',
		animationDuration: '4s',
		animationTimingFunction: 'linear',
		animationIterationCount: 'infinite',
	},
	'@keyframes textAppear': {
		from: {
			width: '100%'
		},
		to: {
			width: '0%'
		}
	},
}