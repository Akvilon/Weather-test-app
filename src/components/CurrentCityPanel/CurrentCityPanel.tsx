import * as React from 'react';
import {default as withStyles, WithStyles} from 'react-jss';
import styles from './CurrentCityPanel.style';
import { WeatherModel } from '../../models';
import { WeatherCard } from '../WeatherCard';
import { Spinner } from '../../utils/Spinner';


interface CurrentCityPanelProps {
  weather: WeatherModel | undefined
}

class CurrentCityPanel extends React.PureComponent<CurrentCityPanelProps & WithStyles<typeof styles>> {
	render() {
		const { classes, weather } = this.props;
		console.log( 'W = ', weather );
		return (
		  <div className={classes.currentCityPanel}>
				{weather ? this.renderCurrentCityWeather() : this.renderSearch()}
      </div>

		);
	}

	private renderCurrentCityWeather = () => {
	  if(this.props.weather) {
	      return (
          <>
						<h3>Weather in your city:</h3>
						<WeatherCard weather={this.props.weather} width={'65%'}/>
          </>
        );
    }else {
			return <Spinner />;
    }

  };



	private renderSearch = () => ( <div>I'am a search panel</div> );
}

const StyledCurrentCityPanel = withStyles(styles)(CurrentCityPanel);

export {StyledCurrentCityPanel as CurrentCityPanel};