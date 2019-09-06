import * as React from 'react';
import { default as withStyles, WithStyles } from 'react-jss';
import styles from './Spinner.style';

const Spinner: React.FC<WithStyles<typeof styles>> = ({classes}) => {
	return(
		<div className={classes.spinnerWrapper}>
			<div className={classes.spinnerInner}>
				<div className={classes.spinner}>
					<img src={require('../../assets/spinner3.svg')}  alt="spinner"/>
				</div>
				<div className={classes.spinnerCircle}>
					<span>Loading...</span>
					<div className={classes.spinnerCircleLayout}>

					</div>
				</div>
			</div>

		</div>
	)
};

const StyledSpinner = withStyles(styles)(Spinner);

export {StyledSpinner as Spinner};