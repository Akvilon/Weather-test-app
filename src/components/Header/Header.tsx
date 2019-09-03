import * as React from 'react';
import styles from './Header.style';
import {default as withStyles, WithStyles} from 'react-jss';
import {Link} from 'react-router-dom';
import { AppState } from '../../store';
import { Dispatch } from 'redux';
import { Action } from '../../store/types';
import { connect } from 'react-redux';
import { clearToken } from '../../store/auth';
import { Button } from '../../utils/Button';

interface StateProps {
	isSignedIn: boolean;
}
interface DispatchProps {
	onSignOut: () => void;
}
interface HeaderProps {}

class Header extends React.PureComponent<StateProps & DispatchProps & HeaderProps & WithStyles<typeof styles>> {
    render() {
        const {classes} = this.props;
        return(
            <div className={classes.header}>
                <div className={classes.logo}>
                    <Link to={'/'}>
                        <img src={require('../../assets/sun.svg')}  alt="logo"/>
                        <span>Weather app</span>
                    </Link>
                </div>
                <div>
									{this.renderAuthControls()}
                </div>
            </div>
        );
    }

    private renderAuthControls = () => (<Button onClick={this.props.onSignOut}>Sign out</Button>);

	// private renderAuthControls = () => {
	// 	if(this.props.isSignedIn){
	// 		return (
   //      <>
	// 				<Button onClick={this.props.onSignOut}>Sign out</Button>
   //      </>
	// 		);
	// 	}
	// 	else return null;
	// };
}


const mapStateToProps = (state: AppState): StateProps => {
	return {
		isSignedIn: !!state.auth.token,
	};
};

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => {
	return {
		onSignOut: () => dispatch(clearToken()),
	};
};


const StyledHeader = withStyles(styles)(connect<StateProps, DispatchProps, HeaderProps>(mapStateToProps, mapDispatchToProps)(Header));
export {StyledHeader as Header};