import * as React from 'react';
import styles from './WeatherList.style';
import {default as withStyles, WithStyles} from 'react-jss';
import { Spinner } from '../../utils/Spinner/Spinner';
import { WeatherModel } from '../../models';
import { WeatherCard } from '../WeatherCard';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from '../../store/types';
import { deleteItem } from '../../store/home';

interface WeatherListProps {
  weatherList: WeatherModel[] | undefined
}

interface DispatchProps {
  onItemDelete: (id: any) => void
}

class WeatherList extends React.PureComponent<WeatherListProps & DispatchProps & WithStyles<typeof styles>> {
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
              <WeatherCard key={cityWeather.id}
                           weather={cityWeather} width={'30%'}
                           margin={'15px'}
                           isCancel={true}
													 onItemClick={this.props.onItemDelete}/>
            )
        });
    };
}

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => {
    return {
			onItemDelete: (id: any) => dispatch(deleteItem(id))
    }
};

const StyledWeatherList = withStyles(styles)(connect<undefined,DispatchProps,WeatherListProps>(undefined, mapDispatchToProps)(WeatherList));

export {StyledWeatherList as WeatherList};


