import * as React from 'react';
import { default as withStyles, WithStyles } from 'react-jss';
import styles from './Weather.style';
import { Image, WeatherModel } from '../../models';
import { CityImage } from '../../models';


interface WeatherCardProps {
	weather: WeatherModel | undefined,
	images: Image[]
	width: string,
	margin?: string,
	isCancel?: boolean,
	onItemClick?: (id:any) => void
}

class WeatherCard extends React.PureComponent<WeatherCardProps & WithStyles<typeof styles>> {
	render() {
		const {weather, images, margin, classes, width, isCancel} = this.props;

		console.log('image = ', images);

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
						<>
							{images ? this.renderImage() : this.renderNoImage()}
						</>
				</div>
				<div className={isCancel? classes.cross : classes.croossInvis} onClick={() =>this.props.onItemClick(weather.id)}>
					<span>x</span>
				</div>
			</div>
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
		return <span>Photo is not available</span>
	}
}


const StyledWeatherCard = withStyles(styles)(WeatherCard);

export {StyledWeatherCard as WeatherCard};

