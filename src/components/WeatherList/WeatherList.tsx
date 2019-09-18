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
import { Link } from 'react-router-dom';
import { Redirect, RouteComponentProps } from 'react-router';

interface WeatherListProps {
    history: any,
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
        const {weatherList, classes} = this.props;
        return weatherList.map((cityWeather)=>{
            return (
              <div className={classes.weatherCardWrap}>
								<WeatherCard key={cityWeather.id}
														 weather={cityWeather} width={'100%'}
														 margin={'0px'}
														 isCancel={true}
														 images={this.props.images}
														 onItemClick={() => this.onItemClick(cityWeather.id)}
														 onItemDelete={this.props.onItemDelete}/>
              </div>

            )
        });
    };

    onItemClick = (id) => {
        this.props.history.push(`/${id}`)
    }
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


