import * as React from 'react';
import { default as withStyles, WithStyles } from 'react-jss';
import styles from './Weather.style';
import { WeatherModel } from '../../models';
import { CityImage } from '../../models';


interface WeatherCardProps {
	weather: WeatherModel | undefined,
	imageResults?: CityImage | undefined
	width: string,
	margin?: string,
	isCancel?: boolean,
	onItemClick?: (id:any) => void
}

class WeatherCard extends React.PureComponent<WeatherCardProps & WithStyles<typeof styles>> {
	render() {
		const {weather, imageResults,margin, classes, width, isCancel} = this.props;
		console.log('ir', imageResults);
		const style = {
			width: width,
			margin: margin
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
				<div className={isCancel? classes.cross : classes.croossInvis} onClick={() =>this.props.onItemClick(weather.id)}>
					<span>x</span>
				</div>
			</div>
		)
	}

	// private renderImage =() => (<div><img src={} alt="city image"/></div>);

}


const StyledWeatherCard = withStyles(styles)(WeatherCard);

export {StyledWeatherCard as WeatherCard};

