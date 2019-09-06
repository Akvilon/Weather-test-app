import * as React from 'react';
import styles from './WeatherList.style';
import {default as withStyles, WithStyles} from 'react-jss';
import { Spinner } from '../../utils/Spinner/Spinner';
import { WeatherModel } from '../../models';
import { WeatherCard } from '../WeatherCard';

interface WeatherListProps {
  weatherList: WeatherModel[] | undefined
}

class WeatherList extends React.PureComponent<WeatherListProps & WithStyles<typeof styles>> {
    render() {
        const {classes,weatherList} =this.props;
        console.log('WWW',weatherList);
        return (
            <div className={classes.weatherList}>
              {weatherList ? this.renderList() : <Spinner />}
            </div>
        );
    }

    private renderList = () => {
        const {weatherList} = this.props;
        return weatherList.map((cityWeather)=>{
            return (
              <WeatherCard key={Math.floor(Math.random()*100000)} weather={cityWeather} width={'30%'} margin={'15px'}/>
            )
        });
    };
}


const StyledWeatherList = withStyles(styles)(WeatherList);

export {StyledWeatherList as WeatherList};


