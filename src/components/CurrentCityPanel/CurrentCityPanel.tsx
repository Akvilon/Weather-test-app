import * as React from 'react';
import {default as withStyles, WithStyles} from 'react-jss';
import styles from './CurrentCityPanel.style';
import { WeatherModel } from '../../models';
import { WeatherCard } from '../WeatherCard';
import { CityImage } from '../../models';


interface CurrentCityPanelProps {
  weather: WeatherModel | undefined,
	imageResults: CityImage | undefined
}

class CurrentCityPanel extends React.PureComponent<CurrentCityPanelProps & WithStyles<typeof styles>> {
	render() {
		const { classes, weather, imageResults } = this.props;
		return (
		  <div className={classes.currentCityPanel}>
				{weather ? this.renderCurrentCityWeather() : this.renderSearch()}
      </div>

		);
	}

	private renderCurrentCityWeather = () => {
	      return (
          <>
						<h3>Weather in your city:</h3>
						<WeatherCard weather={this.props.weather} imageResults={this.props.imageResults} width={'65%'}/>
          </>
        );
  };



	private renderSearch = () => ( <div>I'am a search panel</div> );
}

const StyledCurrentCityPanel = withStyles(styles)(CurrentCityPanel);

export {StyledCurrentCityPanel as CurrentCityPanel};