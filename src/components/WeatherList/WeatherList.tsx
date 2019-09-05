import * as React from 'react';
import styles from './WeatherList.style';
import {default as withStyles, WithStyles} from "react-jss";
import { Spinner } from '../../utils/Spinner/Spinner';
import { WeatherListModel } from '../../models';

interface WeatherListProps {
  weatherList: WeatherListModel | undefined
}

class WeatherList extends React.PureComponent<WeatherListProps & WithStyles<typeof styles>> {
    render() {
        const {classes,weatherList} =this.props;
        console.log('WWW',weatherList);
        return (
            <div className={classes.weatherList}>
              {
                
              }
            </div>
        )
    }

    private renderList = () => {
        const {weatherList} = this.props;
        return weatherList.weatherList.map((item)=>{
            return <div>{item.name}</div>
        });
    }
}


const StyledWeatherList = withStyles(styles)(WeatherList);

export {StyledWeatherList as WeatherList};


