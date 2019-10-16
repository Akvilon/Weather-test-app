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
import { setActiveTheme } from '../../store/theme';
import { getLocalStorage, localStorageExists, setLocalStorage } from '../../utils/storage';

interface StateProps {
	isSignedIn: boolean;
}
interface DispatchProps {
	onSignOut: () => void;
	onThemeChange: (theme: string) => void
}
const ISCHECKED = 'ISCHECKED';

class Header extends React.PureComponent<StateProps & DispatchProps  & WithStyles<typeof styles>> {

	public state= {
		isChecked: false
	};

	componentDidMount() {
		const exist = localStorageExists(ISCHECKED);
		if(exist){
			const value = JSON.parse(getLocalStorage(ISCHECKED));
			if(value === true) {
				this.setState({isChecked: true});
				this.props.onThemeChange('dark');
			} else {
				this.setState({isChecked: false});
				this.props.onThemeChange('light');
			}

		} else {
			setLocalStorage(ISCHECKED, JSON.stringify(false));
		}
	}

	componentDidUpdate() {
		this.state.isChecked ? this.props.onThemeChange('dark') : this.props.onThemeChange('light');

		const isCheckedString = JSON.stringify(this.state.isChecked);
		setLocalStorage(ISCHECKED, isCheckedString)

	}
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
	              <div className={classes.themes}>
		             <h2>Choose theme:</h2>
		              <div>
			              <label className={classes.switch}>
				              <input type="checkbox" onChange={this.handleChecked} checked={this.state.isChecked}/>
					              <span className={`${classes.slider} ${classes.round}`}></span>
			              </label>
		              </div>
	              </div>
                <div>
					{this.renderAuthControls()}
                </div>
            </div>
        );
    }

    private handleChecked =() => {
			this.setState({
				isChecked: !this.state.isChecked
			});
    };


	private renderAuthControls = () => {
		if(this.props.isSignedIn){
			return (
        <>
			<Button onClick={this.props.onSignOut}>Sign out</Button>
        </>
			);
		}
		else return null;
	};
}


const mapStateToProps = (state: AppState): StateProps => {
	return {
		isSignedIn: !!state.auth.token,
	};
};

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => {
	return {
		onSignOut: () => dispatch(clearToken()),
		onThemeChange: (theme: string) => dispatch(setActiveTheme(theme))
	};
};


const StyledHeader = withStyles(styles)(connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(Header));
export {StyledHeader as Header};