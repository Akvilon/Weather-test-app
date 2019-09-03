import * as React from 'react';
import { default as withStyles, WithStyles } from 'react-jss';
import styles from './Input.style';

interface InputProps {
	type: string;
	placeholder: string;
	onChange?: (e: React.SyntheticEvent) => void;
}

const Input: React.FC<InputProps & WithStyles<typeof styles>> = ( props ) => {

	const {classes, type, placeholder} = props;
	return (
		<div className={classes.weatherappInput}>
			<input type={type} placeholder={placeholder}/>
		</div>
	)
};

const StyledInput = withStyles(styles)(Input);

export {StyledInput as Input};