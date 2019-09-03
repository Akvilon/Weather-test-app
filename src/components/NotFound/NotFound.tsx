import * as React from 'react';
import { default as withStyles, WithStyles } from 'react-jss';
import styles from './NotFound.style';


class NotFound extends React.PureComponent<WithStyles<typeof styles>> {
	render() {
		return (
			<div>NOT FOUND 404</div>
		)
	}
}


const StyledNotFound = withStyles(styles)(NotFound);

export {StyledNotFound as NotFound};