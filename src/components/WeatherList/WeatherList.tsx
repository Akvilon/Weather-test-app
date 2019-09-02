import * as React from 'react';
import styles from './WeatherList.style';
import {default as withStyles, WithStyles} from "react-jss";

class WeatherList extends React.PureComponent<WithStyles<typeof styles>> {
    render() {
        return (
            <div>LIST</div>
        )
    }
}


const StyledWeatherList = withStyles(styles)(WeatherList);

export {StyledWeatherList as WeatherList};


