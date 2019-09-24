import * as React from 'react';
import { default as withStyles, WithStyles } from 'react-jss';
import styles from './WeatherCard.style';
import { Image, WeatherModel } from '../../models';
import { CityImage } from '../../models';


interface WeatherCardProps {
	id?: number;
	weather: WeatherModel | undefined,
	images: Image[]
	width?: string,
	margin?: string,
	isCancel?: boolean,
	onCardClick: (id:number) => void,
	onItemDelete?: (id:any) => void
}

class WeatherCard extends React.PureComponent<WeatherCardProps & WithStyles<typeof styles>> {

	componentDidMount() {
		console.log(this.props.weather.weather[0].icon);
	}

	render() {
		const {weather, images, margin, classes, width, isCancel, onCardClick} = this.props;

		const style = {
			width: width,
			margin: margin
		};
		return (
			<>
				<div className={classes.weatherCard}
				     style={style}
						 onClick={() => onCardClick(weather.id)}>
					<div className={classes.weatherCardInfo}>
						<h3>{weather.name}, {weather.sys.country}</h3>
						<h2>{weather.main.temp.toFixed(1)} &deg;</h2>
						<div className={classes.weatherConditions}>
							<h3>{weather.weather[0].description}</h3>
							<img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="condition icon"/>
						</div>

					</div>
					<div className={classes.weatherCardImg}>
						<>
							{images ? this.renderImage() : this.renderNoImage()}
						</>
					</div>
				</div>

				<div className={isCancel? classes.cross : classes.croossInvis} onClick={() =>this.props.onItemDelete(weather.id)}>
					<span>x</span>
				</div>
			</>
		)
	}

	private renderImage = () => {
		// const {images} = this.props;
		// const src = '';
		// return (
		// 	<div><img src={src} alt="city image"/></div>
		// )
	};
	private renderNoImage = () => {
		return <img src={require('../../assets/city.svg')}  alt="city img"/>
	}
}

const StyledWeatherCard = withStyles(styles)(WeatherCard);
export {StyledWeatherCard as WeatherCard};

