import * as React from 'react';
import { WeatherModel } from '../models';
import { Dispatch } from 'redux';
import { Action } from '../store/types';
import { deleteItem, getUserCityWeather } from '../store/home';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { CurrentCityPanel } from '../components/CurrentCityPanel';



interface StateProps {
	weatherList: WeatherModel[] | undefined,
}
interface DispatchProps {
	getUserCityWeather: () => void,
	onChangeUserCityWeather: (id:any) => void
}
interface CurrentCityPanelContainerProps {
	history: any
}

class CurrentCityPanelContainer extends React.PureComponent<StateProps & DispatchProps & CurrentCityPanelContainerProps> {

	public componentDidMount() {
		this.props.getUserCityWeather();
	}

	render() {
		const {weatherList} = this.props;

		return (
			<div>
				{weatherList ? this.renderCityPanel(weatherList) : null}
			</div>
		)
	}

	private renderCityPanel = (arr) => {
		const panelWeather = this.transformWeatherList('user', 'marker', arr);
		return (
				<CurrentCityPanel weather={panelWeather}
				                  onChangeUserCityWeather={this.props.onChangeUserCityWeather}
				                  onCardClick={this.onCardClick}/>
			);
	};

	private transformWeatherList = (key, prop, arr) => {
		return arr.find( el => el[prop] === key)
	};

	private onCardClick = (id) => {
		this.props.history.push(`/details/${id}`);
	};
}

const mapStateToProps = (state: AppState): StateProps => {
	return {
		weatherList: state.home.weatherList,
	};
};

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
	getUserCityWeather: () => dispatch(getUserCityWeather()),
	onChangeUserCityWeather: (id:any) => dispatch(deleteItem(id))
});

const ConnectedCurrentCityPanelContainer = connect<StateProps, DispatchProps, CurrentCityPanelContainerProps>(mapStateToProps, mapDispatchToProps)(CurrentCityPanelContainer);

export {ConnectedCurrentCityPanelContainer as CurrentCityPanelContainer};