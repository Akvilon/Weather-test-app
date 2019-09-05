import * as React from 'react';
import { default as withStyles, WithStyles } from 'react-jss';
import styles from './Weather.style';
import { WeatherModel } from '../../models';
import { CityImage } from '../../models/CityImage';


interface WeatherCardProps {
	weather: WeatherModel | undefined,
	imageResults: CityImage | undefined
	width: string
}

class WeatherCard extends React.PureComponent<WeatherCardProps & WithStyles<typeof styles>> {
	render() {
		const {weather, imageResults, classes, width} = this.props;
		const style = {
			width: width
		};
		return (
			<div className={classes.weatherCard} style={style}>
				<div className={classes.weatherCardInfo}>
					<h3>{weather.name}, {weather.sys.country}</h3>
					<h2>{weather.main.temp.toFixed(1)} &deg;</h2>
					<h3>{weather.weather[0].description}</h3>
				</div>
				<div className={classes.weatherCardImg}>
						<><span>Photo is not available</span></>
				</div>
			</div>
		)
	}

	// private renderImage =() => (<div><img src={} alt="city image"/></div>);

}


const StyledWeatherCard = withStyles(styles)(WeatherCard);

export {StyledWeatherCard as WeatherCard};

