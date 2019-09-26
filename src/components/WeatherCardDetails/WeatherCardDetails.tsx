import * as React from 'react';
import { RouteComponentProps, Router } from 'react-router';
import withStyles, { WithStyles } from 'react-jss';
import styles from './WeatherCardDetails.style';
import { connect } from 'react-redux';
import { Action } from '../../store/types';
import { Dispatch } from 'redux';
import { getWeatherDetails } from '../../store/home';
import { AppState } from '../../store';
import { Link } from 'react-router-dom';
import { CityImage, WeatherDetails } from '../../models';
import { Spinner } from '../../utils/Spinner';
import { getLocalStorage, removeLocalStorage, setLocalStorage } from '../../utils/storage';

interface StateProps {
	weatherDetails: WeatherDetails | undefined
	images: CityImage[]
}

interface DispatchProps {
	getWeatherDetails: (id: string) => void
}

export interface WeatherCardDetailsProps extends RouteComponentProps<{ id: string }>{}

const IMG = 'IMG';

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


	componentWillUnmount(){
		removeLocalStorage(IMG);
	}

	private getImage = (items, data) => {
		if(items && data) {
			const imgUrl = items.find(el => el.img);
			return imgUrl ? this.renderImage(items.find(el => el.city === data.city.name).img) : this.renderImageStub();
			// return items.find(el => {
			// 	if(el.img && el.city === data.city.name){
			// 		return <img src={el.img} alt="city image"/>
			// 	}else  {
			// 		return <img src={require('../../assets/city.svg')}  alt="city img"/>
			// 	}
			// });
		}else {
			const details = JSON.parse(getLocalStorage('details'));
			const images = JSON.parse(getLocalStorage('IMAGES'));
			const src = images.find(el => el.city === details.city.name).img;
			return src? this.renderImage(src) : this.renderImageStub();
			// return images.find(el => {
			// 	if(el.img && el.city === details.city.name){
			// 		this.renderImage(el.img);
			// 	}else {
			// 		this.renderImageStub()
			// 	}
			// });

		}
	};

	private renderContent = () => {
		const {classes, weatherDetails, images} = this.props;

		return (
			<>
        <div className={classes.weatherDetailsInfo}>
            <div className={classes.weatherDetailsInfoImage}>
	            {this.getImage(images, weatherDetails)}
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


	private renderImage = (img) => <img src={img} alt="city image"/>;
	private renderImageStub = () => <img src={require('../../assets/city.svg')}  alt="city img"/>
}



const mapStateToProps = (state: AppState): StateProps => {
	return {
		weatherDetails: state.home.weatherDetails,
		images: state.home.images
	};
};

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
	getWeatherDetails: (id: string) => dispatch(getWeatherDetails(id))
});

const StyledWeatherCardDetails = withStyles(styles)(connect<StateProps, DispatchProps, undefined>(mapStateToProps, mapDispatchToProps)(WeatherCardDetails));

export {StyledWeatherCardDetails as WeatherCardDetails};