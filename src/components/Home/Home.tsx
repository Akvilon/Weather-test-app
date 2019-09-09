import * as React from 'react';
import styles from './Home.style';
import {default as withStyles, WithStyles} from 'react-jss';
import {Row} from '../../utils/Row';
import {CurrentCityPanel} from '../CurrentCityPanel';
import {AddItemPanel} from '../AddItemPanel';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from '../../store/types';
import { AppState } from '../../store';
import { Image, WeatherModel } from '../../models';
import { getUserCityWeather, getWeatherList } from '../../store/home';
import { CityImage } from '../../models';
import { WeatherList } from '../WeatherList';


interface StateProps {
	weather: WeatherModel | undefined
	weatherList: WeatherModel[] | undefined,
	images: Image[]
}

interface DispatchProps {
	getUserCityWeather: () => void;
	getWeatherList: () => void;
}

class Home extends React.PureComponent<StateProps & DispatchProps & WithStyles<typeof styles>>{

    public componentDidMount() {
			this.props.getUserCityWeather();
			if(!this.props.weatherList){
				this.props.getWeatherList();
			}
    }

    public render() {
			const {classes} = this.props;

        return (
            <div className={classes.home}>
                {this.renderHome()}
            </div>
        );
    }

    private renderHome = () => {
			const {classes, weatherList} = this.props;
        return (
          <>
              <div className={classes.homeControls}>
								<Row leftPart={this.AddItemPanel()} leftWidth={'40%'} rightWidth={'60%'} rightPart={this.CurrentCityPanel()}/>
              </div>
              <WeatherList weatherList={weatherList}/>
          </>
        );
    };

    private CurrentCityPanel = () => (<CurrentCityPanel weather={this.props.weather} images={this.props.images}/>);
    private AddItemPanel = () => (<AddItemPanel />);
}

const mapStateToProps = (state: AppState): StateProps => {
	return {
		weather: state.home.weather,
		weatherList: state.home.weatherList,
		images: state.home.images
	};
};

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => {
	return {
		getUserCityWeather: () => dispatch(getUserCityWeather()),
		getWeatherList: () => dispatch(getWeatherList())
	};
};

const StyledHome = withStyles(styles)(connect<StateProps, DispatchProps, undefined>(mapStateToProps, mapDispatchToProps)(Home));
export {StyledHome as Home};