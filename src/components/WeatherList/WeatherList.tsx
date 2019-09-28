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
import { getLocalStorage, setLocalStorage } from '../../utils/storage';


interface WeatherListProps {
	history: any;
    weatherList: WeatherModel[] | undefined
}

interface DispatchProps {
  onItemDelete: (id: any) => void,
}

class WeatherList extends React.PureComponent<WeatherListProps & DispatchProps & WithStyles<typeof styles>> {

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
	        return weatherList.map((cityWeather: WeatherModel)=>{
		        const images = JSON.parse(getLocalStorage('LIST IMAGES'));

		        return (
			        <div className={classes.weatherCardWrap}
			             key={cityWeather.id}>
				        <WeatherCard
					        weather={cityWeather}
					        isCancel={true}
					        images={images? images.find(el => el.city === cityWeather.name).img: null}
					        onCardClick={this.onCardClick}
					        onItemDelete={this.props.onItemDelete}/>
			        </div>
		        )
	        });
    };

    private onCardClick = (id) => {
			this.props.history.push(`/details/${id}`);
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => {
    return {
		onItemDelete: (id: any,) => dispatch(deleteItem(id)),
    }
};

const StyledWeatherList = withStyles(styles)(connect<undefined,DispatchProps,WeatherListProps>(undefined, mapDispatchToProps)(WeatherList));

export {StyledWeatherList as WeatherList};


