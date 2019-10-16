import * as React from 'react';
import styles from './WeatherList.style';
import {default as withStyles, WithStyles} from 'react-jss';
import { Spinner } from '../../utils/Spinner/Spinner';
import { WeatherModel } from '../../models';
import { WeatherCard } from '../WeatherCard';
import { getLocalStorage } from '../../utils/storage';


interface WeatherListProps {
	weatherList: WeatherModel[] | undefined,
	onCardClick: (id: any) => void,
	onItemDelete: (id:any) => void
}


class WeatherList extends React.PureComponent<WeatherListProps & WithStyles<typeof styles>> {

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
	        return weatherList.map((weather: WeatherModel)=>{
		        const images = JSON.parse(getLocalStorage('LIST IMAGES'));

		        return (
			        <div className={classes.weatherCardWrap}
			             key={weather.id}>
				        <WeatherCard
					        weather={weather}
					        isCancel={true}
					        images={images? images.find(el => el.city === weather.name).img: null}
					        onCardClick={() => this.props.onCardClick(weather.id)}
					        onItemDelete={this.props.onItemDelete}/>
			        </div>
		        )
	        });
    };

}

const StyledWeatherList = withStyles(styles)(WeatherList);

export {StyledWeatherList as WeatherList};


