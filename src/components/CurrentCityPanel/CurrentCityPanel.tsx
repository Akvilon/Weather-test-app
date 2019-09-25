import * as React from 'react';
import {default as withStyles, WithStyles} from 'react-jss';
import styles from './CurrentCityPanel.style';
import { Image, WeatherModel } from '../../models';
import { WeatherCard } from '../WeatherCard';
import { CityImage } from '../../models';
import { SearchPanel } from '../SearchPanel';
import { connect } from 'react-redux';
import { readToken } from '../../store/auth';
import { getUserCityWeather, getWeatherList } from '../../store/home';
import { Action } from '../../store/types';
import { Dispatch } from 'redux';
import { setUserCityWeather } from '../../store/home/actions';
import { setLocalStorage } from '../../utils/storage';



interface DispatchProps {
	onChangeUserCityWeather: () => void
}

interface CurrentCityPanelProps {
	history: any;
  weather: WeatherModel | undefined,
	images: Image[]
}

class CurrentCityPanel extends React.PureComponent<DispatchProps & CurrentCityPanelProps & WithStyles<typeof styles>> {

	render() {
		const { classes, weather } = this.props;
		return (
			<div className={classes.currentCityPanel}>
				{weather ? this.renderCurrentCityWeather() : this.renderSearch()}
			</div>

		);
	}

	private renderCurrentCityWeather = () => {
		const { classes } = this.props;
		return (
			<>
				<div>
					<h2>Weather in your city:</h2>
					<div className={classes.notYourCity}>
						<h4>Not your city?</h4>
						<button onClick={this.props.onChangeUserCityWeather}>Click here</button>
					</div>

				</div>

				<WeatherCard weather={this.props.weather}
				             images={this.props.images}
				             width={'65%'}
				             onCardClick={this.onCardClick}/>
			</>
		);
	};

	private onCardClick = (id) => {
		this.props.history.push(`/details/${id}`);
	};

	private renderSearch = () => ( <SearchPanel /> );
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
	onChangeUserCityWeather: () => dispatch(setUserCityWeather(undefined))
});

const StyledCurrentCityPanel = withStyles(styles)(connect<undefined, DispatchProps, CurrentCityPanelProps>(undefined, mapDispatchToProps)(CurrentCityPanel));

export {StyledCurrentCityPanel as CurrentCityPanel};