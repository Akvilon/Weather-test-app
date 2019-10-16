import * as React from 'react';
import {default as withStyles, WithStyles} from 'react-jss';
import styles from './CurrentCityPanel.style';
import { WeatherModel } from '../../models';
import { WeatherCard } from '../WeatherCard';
import { SearchPanelContainer } from '../../containers';


interface CurrentCityPanelProps {
	weather: WeatherModel | undefined,
	onChangeUserCityWeather: (id:any) => void,
	onCardClick: (id: any) => void
}

class CurrentCityPanel extends React.PureComponent<CurrentCityPanelProps & WithStyles<typeof styles>> {

	render() {
		const { classes, weather } = this.props;

		return (
			<div className={classes.currentCityPanel}>
				{weather ? this.renderCurrentCityWeather() : this.renderSearch()}
			</div>
		);
	}

	private renderCurrentCityWeather = () => {
		const { classes, weather} = this.props;

		return (
			<>
				<div>
					<h2>Weather in your city:</h2>
					<div className={classes.notYourCity}>
						<h4>Not your city?</h4>
						<button onClick={() => this.props.onChangeUserCityWeather(weather.id)}>Click here</button>
					</div>
				</div>

				<WeatherCard weather={weather}
				             width={'65%'}
				             onCardClick={()=>this.props.onCardClick(weather.id)}/>
			</>
		);
	};

	private renderSearch = () => ( <SearchPanelContainer /> );
}

const StyledCurrentCityPanel = withStyles(styles)(CurrentCityPanel);

export {StyledCurrentCityPanel as CurrentCityPanel};