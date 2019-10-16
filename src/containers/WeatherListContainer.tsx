import * as React from 'react';
import { WeatherModel } from '../models';
import { Dispatch } from 'redux';
import { Action } from '../store/types';
import { deleteItem, getWeatherList } from '../store/home';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { WeatherList } from '../components/WeatherList';


interface WeatherListContainerProps {
	history: any;
}

interface StateProps {
	weatherList: WeatherModel[] | undefined
}

interface DispatchProps {
	getWeatherList: () => void,
	onItemDelete: (id: any) => void
}

class WeatherListContainer extends React.PureComponent<WeatherListContainerProps & StateProps & DispatchProps> {

	public componentDidMount() {
		 this.props.getWeatherList();
	}

	render() {
		const {weatherList} = this.props;

		if(weatherList){
			const transformedWeatherList = this.transformList('list', 'marker', weatherList);

			return (
				<WeatherList weatherList={transformedWeatherList}
				             onItemDelete={this.props.onItemDelete}
				             onCardClick={this.onCardClick}/>
			);
		}
	}


	private transformList = (key, prop, arr) => {
		return arr.filter(el => el[prop] === key);
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

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => {
	return {
		getWeatherList: () => dispatch(getWeatherList()),
		onItemDelete: (id: any) => dispatch(deleteItem(id)),
	};
};

const ConnectedWeatherListContainer = connect<StateProps,DispatchProps,WeatherListContainerProps>(mapStateToProps, mapDispatchToProps)(WeatherListContainer);

export {ConnectedWeatherListContainer as WeatherListContainer};


