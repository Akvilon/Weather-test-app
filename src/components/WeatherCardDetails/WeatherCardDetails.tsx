import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import withStyles, { WithStyles } from 'react-jss';
import styles from './WeatherCardDetails.style';
import { connect } from 'react-redux';
import { Action } from '../../store/types';
import { Dispatch } from 'redux';
import { getWeatherDetails } from '../../store/home';
import { AppState } from '../../store';
import { WeatherDetails } from '../../models';
import { Link } from 'react-router-dom';

interface StateProps {
	weatherDetails: WeatherDetails | undefined
}

interface DispatchProps {
	getWeatherDetails: (name: string) => void
}

class WeatherCardDetails extends React.PureComponent<StateProps & DispatchProps & RouteComponentProps & WithStyles<typeof styles>> {

	componentDidMount() {
		const cityName = this.props.location.state.city;
		console.log('props', cityName);
		this.props.getWeatherDetails(cityName);
	}

	render() {
		const {classes, weatherDetails} = this.props;
		console.log('Details = ', weatherDetails);

		return (
			<div className={classes.weatherDetails}>
				<div className={classes.weatherDetailsInfo}>
					<div className={classes.weatherDetailsInfoImage}>
						{this.renderImage()}
					</div>
					<div className={classes.weatherDetailsInfoData}>
						<div>
							<h2>Weather in <span>{weatherDetails.city.name}</span> for 5 days</h2>
						</div>
						<div>
							<h3>Country: {weatherDetails.city.country}</h3>
							<h3>Population: {weatherDetails.city.population} people</h3>
						</div>
					</div>
				</div>
				<div className={classes.weatherDetailsList}>
					{weatherDetails.list.map((day)=> {
						const date = day.dt_txt.substr(0,10);
						const convertDate = new Date(date).toLocaleDateString();
						const time = day.dt_txt.substr(11).substr(0, 5);
						return (
							<div className={classes.weatherDetailsCard} key={Math.floor(Math.random()* 1000000)}>
								<h3>{convertDate} <span>{time}</span></h3>
								<h4>Temperature - {day.main.temp} &deg;</h4>
								<h4>Humidity - {day.main.humidity}</h4>
								<h4>Pressure - {day.main.pressure}</h4>
								<h5>{day.weather[0].description}</h5>
							</div>
						);
					})}
				</div>

				<div className={classes.backArrow}>
					<Link to={'/'}>
						<img src={require('../../assets/back_arrow.svg')}  alt="back arrow"/>
					</Link>

				</div>
			</div>
		);
	}

	private renderImage = () => <img src={require('../../assets/city.svg')}  alt="city img"/>;

}



const mapStateToProps = (state: AppState): StateProps => {
	return {
		weatherDetails: state.home.weatherDetails,
	};
};

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
	getWeatherDetails: (name: string) => dispatch(getWeatherDetails(name))
});

const StyledWeatherCardDetails = withStyles(styles)(connect<StateProps, DispatchProps, undefined>(mapStateToProps, mapDispatchToProps)(WeatherCardDetails));

export {StyledWeatherCardDetails as WeatherCardDetails};