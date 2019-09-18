import * as React from 'react';
import {Header} from '../Header';
import { SignIn } from '../SignIn';
import styles from './Layout.style';
import { default as withStyles, WithStyles } from 'react-jss';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { Dispatch } from 'redux';
import { Action } from '../../store/types';
import { readToken } from '../../store/auth';


interface StateProps {
	isSignedIn: boolean;
}
interface DispatchProps {
	readToken: () => void;
}

class Layout extends React.Component<StateProps & DispatchProps & WithStyles<typeof styles>> {

		public componentDidMount() {
			this.props.readToken();
		}

    render() {
			const {classes, isSignedIn} = this.props;
        return (
            <div className={classes.wrapper}>
							{
								this.renderContent()
								/*{isSignedIn ? this.renderContent() : <SignIn />}*/
							}
            </div>
        );
    }

    private renderContent = () => (
    	<>
				<Header />
				{this.props.children}
			</>
		);
}

const mapStateToProps = (state: AppState): StateProps => {
	return {
		isSignedIn: !!state.auth.token
	};
};

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
	readToken: () => dispatch(readToken())
});

const StyledLayout = withStyles(styles)(connect<StateProps,DispatchProps,undefined>(mapStateToProps,mapDispatchToProps)(Layout));

export {StyledLayout as Layout};