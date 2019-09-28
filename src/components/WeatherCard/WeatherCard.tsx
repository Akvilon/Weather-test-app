import * as React from 'react';
import { default as withStyles, WithStyles } from 'react-jss';
import styles from './WeatherCard.style';
import { CityImage, WeatherModel } from '../../models';
import { getLocalStorage } from '../../utils/storage';
import { Spinner } from '../../utils/Spinner';


interface WeatherCardProps {
	id?: number;
	weather: WeatherModel | undefined,
	images: CityImage[]
	width?: string,
	margin?: string,
	isCancel?: boolean,
	onCardClick: (id:number) => void,
	onItemDelete?: (id:any) => void
}

class WeatherCard extends React.PureComponent<WeatherCardProps & WithStyles<typeof styles>> {

	render() {
		const {weather} = this.props;
		return (
			<>
				{weather ? this.renderContent() : <Spinner />}
			</>
		);
	}

	private renderContent = () => {
		const {weather, margin, classes, width, isCancel, onCardClick} = this.props;
		const localImages = JSON.parse(getLocalStorage('LIST IMAGES'));
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
							{localImages ? this.getImage(localImages, weather):null}
						</>
					</div>
				</div>

				<div className={isCancel? classes.cross : classes.croossInvis} onClick={() =>this.props.onItemDelete(weather.id)}>
					<span>x</span>
				</div>
			</>
		);
	};

	private getImage = (items, data) => {
		if(items && data) {
			const imgUrl = items.find(el => el.city === data.name).img;
			return imgUrl !== 'noImg' ? this.renderImage(imgUrl) : this.renderImageStub();
		}else {
			const list = JSON.parse(getLocalStorage('LIST'));
			const images = JSON.parse(getLocalStorage('LIST IMAGES'));
			if(images && list){
				const src = images.find(el => el.city === list.name).img;
				return src !== 'noImg' ? this.renderImage(src) : this.renderImageStub();
			}

		}
	};

	private renderImage = (img) => <img src={img} alt="city"/>;
	private renderImageStub = () => <img src={require('../../assets/city.svg')}  alt="city"/>;

}

const StyledWeatherCard = withStyles(styles)(WeatherCard);
export {StyledWeatherCard as WeatherCard};

