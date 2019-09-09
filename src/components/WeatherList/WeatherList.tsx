import * as React from 'react';
import styles from './WeatherList.style';
import {default as withStyles, WithStyles} from 'react-jss';
import { Spinner } from '../../utils/Spinner/Spinner';
import { Image, WeatherModel } from '../../models';
import { WeatherCard } from '../WeatherCard';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from '../../store/types';
import { deleteItem } from '../../store/home';
import { AppState } from '../../store';

interface WeatherListProps {
  weatherList: WeatherModel[] | undefined
}
interface StateProps {
    images: Image[]
}

interface DispatchProps {
  onItemDelete: (id: any) => void
}

class WeatherList extends React.PureComponent<StateProps & WeatherListProps & DispatchProps & WithStyles<typeof styles>> {
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
                           images={this.props.images}
													 onItemClick={this.props.onItemDelete}/>
            )
        });
    };
}

const mapStateToProps = (state: AppState) => {
    return {
        images: state.home.images
    }
};

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => {
    return {
			onItemDelete: (id: any) => dispatch(deleteItem(id))
    }
};

const StyledWeatherList = withStyles(styles)(connect<StateProps,DispatchProps,WeatherListProps>(mapStateToProps, mapDispatchToProps)(WeatherList));

export {StyledWeatherList as WeatherList};


