import * as React from 'react';
import styles from './WeatherList.style';
import {default as withStyles, WithStyles} from "react-jss";
import { Spinner } from '../../utils/Spinner/Spinner';

class WeatherList extends React.PureComponent<WithStyles<typeof styles>> {
    render() {
        const {classes} =this.props;
        return (
            <div className={classes.weatherList}>

            </div>
        )
    }
}


const StyledWeatherList = withStyles(styles)(WeatherList);

export {StyledWeatherList as WeatherList};


