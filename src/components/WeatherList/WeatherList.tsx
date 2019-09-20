import * as React from 'react';
import styles from './WeatherList.style';
import {default as withStyles, WithStyles} from 'react-jss';
import { Spinner } from '../../utils/Spinner/Spinner';
import { Image, WeatherModel } from '../../models';
import { WeatherCard } from '../WeatherCard';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from '../../store/types';
import { deleteItem, setWeatherList } from '../../store/home';
import { AppState } from '../../store';
import { Link } from 'react-router-dom';
import { getLocalStorage, setLocalStorage } from '../../utils/storage';

interface WeatherListProps {
    history: any,
    weatherList: WeatherModel[] | undefined
}
interface StateProps {
    images: Image[]
}

interface DispatchProps {
  onItemDelete: (id: any) => void,
	setWeatherList: (list: WeatherList) => void
}

class WeatherList extends React.PureComponent<StateProps & WeatherListProps & DispatchProps & WithStyles<typeof styles>> {

	componentDidMount(){
		const json = getLocalStorage('LIST');
		if(json) {
			console.log('yes');
			const list = JSON.parse(json);
			console.log(list);
			this.props.setWeatherList(list);
		}
	}
	componentDidUpdate(){
		const list = JSON.stringify(this.props.weatherList);
		setLocalStorage('LIST', list);
	}

    render() {
        const {classes,weatherList} =this.props;
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
              <div className={classes.weatherCardWrap} key={cityWeather.id}>
	              <Link to={{
	              	pathname:`/details/${cityWeather.id}`,
		              state: {city:cityWeather.name}
	              }}>
		              <WeatherCard
										 weather={cityWeather}
										 isCancel={true}
										 images={this.props.images}
										 onItemDelete={this.props.onItemDelete}/>
	              </Link>
              </div>

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
			onItemDelete: (id: any) => dispatch(deleteItem(id)),
	    setWeatherList: (list: WeatherList) => dispatch(setWeatherList(list))
    }
};

const StyledWeatherList = withStyles(styles)(connect<StateProps,DispatchProps,WeatherListProps>(mapStateToProps, mapDispatchToProps)(WeatherList));

export {StyledWeatherList as WeatherList};


