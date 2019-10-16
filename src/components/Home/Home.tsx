import * as React from 'react';
import styles from './Home.style';
import {RouteComponentProps} from 'react-router';
import {SignIn} from '../SignIn';
import {Header} from '../Header';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { default as withStyles, WithStyles } from 'react-jss';
import { Dispatch } from 'redux';
import { Action } from '../../store/types';
import { readToken } from '../../store/auth';
import { Row } from '../../utils/Row';
import { AddItemPanel } from '../AddItemPanel';
import { CurrentCityPanelContainer, WeatherListContainer } from '../../containers';


interface StateProps {
	isSignedIn: boolean;
}

interface DispatchProps {
	readToken: () => void;
}

class Home extends React.PureComponent<StateProps & DispatchProps & RouteComponentProps & WithStyles<typeof styles>> {

	public componentDidMount()  {
		this.props.readToken();
	};

    render() {
        const { classes,isSignedIn } = this.props;
        return(
            <div className={classes.home}>
                {isSignedIn ? this.renderHome() : this.renderSignIn()}
            </div>
        );
    }

    private renderHome = () => {
        return (
	          this.renderContent()
        );
    };

	private renderContent = () => {
		const {classes} = this.props;
		return (
			<>
				<Header />
				<div className={classes.homeControls}>
					<Row leftPart={this.AddItemPanel()} leftWidth={'40%'} rightWidth={'60%'} rightPart={this.CurrentCityPanelContainer()}/>
				</div>
				<WeatherListContainer history={this.props.history}/>
			</>
			);
		};

	private CurrentCityPanelContainer = () => (<CurrentCityPanelContainer history={this.props.history}/> );
	private AddItemPanel = () => (<AddItemPanel />);
    private renderSignIn = () => (<SignIn />);
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
	    isSignedIn: !!state.auth.token
    };
};
const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
	readToken: () => dispatch(readToken()),
});

const StyledHome = withStyles(styles)(connect<StateProps, DispatchProps, undefined>(mapStateToProps,mapDispatchToProps)(Home));

export { StyledHome as Home };