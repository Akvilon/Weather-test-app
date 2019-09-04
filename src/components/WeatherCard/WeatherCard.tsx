import * as React from 'react';
import { default as withStyles, WithStyles } from 'react-jss';
import styles from './Weather.style';
import { WeatherModel } from '../../models';


interface WeatherCardProps {
	weather: WeatherModel | undefined,
	width: string
}

const WeatherCard: React.FC<WeatherCardProps & WithStyles<typeof styles>> = (props) => {
	const {weather, classes, width} = props;
	const style = {
		width: width
	};
	return (
		<div className={classes.weatherCard} style={style}>
			<h3>{weather.name}, {weather.sys.country}</h3>
			<h2>{weather.main.temp} deg</h2>
			<h3>{weather.weather[0].description}</h3>
		</div>
	)
};


const StyledWeatherCard = withStyles(styles)(WeatherCard);

export {StyledWeatherCard as WeatherCard};

