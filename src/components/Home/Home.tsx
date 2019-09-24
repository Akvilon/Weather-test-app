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
import { Image, WeatherModel } from '../../models';
import { getUserCityWeather, getWeatherList } from '../../store/home';
import { Row } from '../../utils/Row';
import { CurrentCityPanel } from '../CurrentCityPanel';
import { AddItemPanel } from '../AddItemPanel';
import { WeatherList } from '../WeatherList';
import { Spinner } from '../../utils/Spinner';


interface StateProps {
	weather: WeatherModel | undefined
	weatherList: WeatherModel[] | undefined,
	images: Image[],
	isSignedIn: boolean;
}

interface DispatchProps {
	readToken: () => void;
	getUserCityWeather: () => void;
	getWeatherList: () => void;
}

class Home extends React.PureComponent<StateProps & DispatchProps & RouteComponentProps & WithStyles<typeof styles>> {

	public componentDidMount() {
		this.props.readToken();
		this.props.getUserCityWeather();
		this.props.getWeatherList();
	}

    render() {

        const { classes,isSignedIn} = this.props;

        return(
            <div className={classes.home}>
                {isSignedIn ? this.renderHome() : this.renderSignIn()}
            </div>
        );
    }

    private renderHome = () => {
	    const {weatherList} = this.props;
        return (
        	<>
	          {weatherList ? this.renderContent() : <Spinner />}
	        </>
        );
    };

		private renderContent = () => {
			const {classes, weatherList} = this.props;
			return (
				<>
					<Header />
					<div className={classes.homeControls}>
						<Row leftPart={this.AddItemPanel()} leftWidth={'40%'} rightWidth={'60%'} rightPart={this.CurrentCityPanel()}/>
					</div>
					<WeatherList history={this.props.history} weatherList={weatherList}/>
				</>
			);
		};

		private CurrentCityPanel = () => (<CurrentCityPanel history={this.props.history} weather={this.props.weather} images={this.props.images}/> );
		private AddItemPanel = () => (<AddItemPanel />);
    private renderSignIn = () => (<SignIn />);


}

const mapStateToProps = (state: AppState): StateProps => {
    return {
	    isSignedIn: !!state.auth.token,
	    weather: state.home.weather,
	    weatherList: state.home.weatherList,
	    images: state.home.images
    };
};
const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
	readToken: () => dispatch(readToken()),
	getUserCityWeather: () => dispatch(getUserCityWeather()),
	getWeatherList: () => dispatch(getWeatherList())
});

const StyledHome = withStyles(styles)(connect<StateProps, DispatchProps, undefined>(mapStateToProps,mapDispatchToProps)(Home));

export { StyledHome as Home };