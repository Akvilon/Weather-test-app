import * as React from 'react';
import { default as withStyles, WithStyles } from 'react-jss';
import styles from './Button.style';

interface ButtonProps {
	onClick?: (e: React.SyntheticEvent) => void;
}

const Button: React.FC<ButtonProps & WithStyles<typeof styles>> = (props) => {

	const {classes} = props;
	return (
		<div className={classes.weatherappBtn}>
			<button>
				{props.children}
			</button>
		</div>
	)
};

const StyledButton = withStyles(styles)(Button);

export {StyledButton as Button};