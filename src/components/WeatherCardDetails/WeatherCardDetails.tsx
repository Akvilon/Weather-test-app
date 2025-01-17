import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import withStyles, { WithStyles } from 'react-jss';
import styles from './WeatherCardDetails.style';
import { connect } from 'react-redux';
import { Action } from '../../store/types';
import { Dispatch } from 'redux';
import { getWeatherDetails } from '../../store/home';
import { AppState } from '../../store';
import { Link } from 'react-router-dom';
import { WeatherDetails } from '../../models';
import { Spinner } from '../../utils/Spinner';
import { getLocalStorage } from '../../utils/storage';

interface StateProps {
	weatherDetails: WeatherDetails | undefined
}

interface DispatchProps {
	getWeatherDetails: (id: string) => void
}

export interface WeatherCardDetailsProps extends RouteComponentProps<{ id: string }>{}

class WeatherCardDetails extends React.PureComponent<StateProps & DispatchProps & WeatherCardDetailsProps & WithStyles<typeof styles>> {

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.getWeatherDetails(id);
	}

	render() {
		const {classes, weatherDetails} = this.props;

		return (
			<div className={classes.weatherDetails}>
				{weatherDetails ? this.renderContent() : <Spinner />}
			</div>
		);
	}

	private renderContent = () => {
		const {classes, weatherDetails} = this.props;
		const images = JSON.parse(getLocalStorage('LIST IMAGES'));
		return (
			<>
        <div className={classes.weatherDetailsInfo}>
            <div className={classes.weatherDetailsInfoImage}>
	            {images ? this.getImage(images, weatherDetails) : null}
            </div>
            <div className={classes.weatherDetailsInfoData}>
                <div>
					<h2>Weather in <span>{weatherDetails.city.name}</span> for 5 days</h2>
                </div>
                <div>
					<h3>Country: {weatherDetails.city.country}</h3>
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
						<div className={classes.weatherDetailsConditions}>
							<h5>{day.weather[0].description}</h5>
							<img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="condition icon"/>
						</div>

					</div>
						);
					})}
				</div>

				<div className={classes.backArrow}>
					<Link to={'/'}>
						<img src={require('../../assets/back_arrow.svg')}  alt="back arrow"/>
					</Link>
				</div>
			</>
		);
	};
	
	private getImage = (items, data) => {
		if(items && data) {
			const imgUrl = items.find(el => el.city === data.city.name);
			return imgUrl ? this.renderImage(items.find(el => el.city === data.city.name).img) : this.renderImageStub();
		}else {
			const details = JSON.parse(getLocalStorage('details'));
			const images = JSON.parse(getLocalStorage('LIST IMAGES'));
			const src = images.find(el => el.city === details.city.name).img;
			return src? this.renderImage(src) : this.renderImageStub();
		}
	};

	private renderImage = (img) => {
		return img !== 'noImg' ? <img src={img} alt="city"/> : <img src={require('../../assets/city.svg')}  alt="city"/>;
	}
	private renderImageStub = () => <img src={require('../../assets/city.svg')}  alt="city"/>
}


const mapStateToProps = (state: AppState): StateProps => {
	return {
		weatherDetails: state.home.weatherDetails,
	};
};

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
	getWeatherDetails: (id: string) => dispatch(getWeatherDetails(id))
});

const StyledWeatherCardDetails = withStyles(styles)(connect<StateProps, DispatchProps, undefined>(mapStateToProps, mapDispatchToProps)(WeatherCardDetails));

export {StyledWeatherCardDetails as WeatherCardDetails};