import * as React from 'react';
import styles from './Home.style';
import {default as withStyles, WithStyles} from 'react-jss';
import {Row} from '../../utils/Row';
import {CurrentCityPanel} from '../CurrentCityPanel';
import {AddItemPanel} from '../AddItemPanel';
import { WeatherList } from '../WeatherList';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from '../../store/types';
import { getUserCoords } from '../../store/home';
import { AppState } from '../../store';
import { WeatherModel } from '../../models';


interface StateProps {
	weather: WeatherModel | undefined
}

interface DispatchProps {
	getUserCoords: () => void;
}

class Home extends React.PureComponent<StateProps & DispatchProps & WithStyles<typeof styles>>{

    public componentDidMount() {
			this.props.getUserCoords();
    }

    public render() {
			const {classes} = this.props;

        return (
            <div className={classes.home}>
                {this.renderHome()}
            </div>
        );
    }

    private renderHome = () => {
			const {classes} = this.props;
        return (
          <>
              <div className={classes.homeControls}>
								<Row leftPart={this.AddItemPanel()} rightPart={this.CurrentCityPanel()}/>
              </div>
              <WeatherList />
          </>
        );
    };

    private CurrentCityPanel = () => (<CurrentCityPanel weather={this.props.weather}/>);
    private AddItemPanel = () => (<AddItemPanel />);
}

const mapStateToProps = (state: AppState): StateProps => {
	return {
		weather: state.home.weather
	}
};

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => {
	return {
		getUserCoords: () => dispatch(getUserCoords()),
	};
};

const StyledHome = withStyles(styles)(connect<StateProps, DispatchProps, undefined>(mapStateToProps, mapDispatchToProps)(Home));
export {StyledHome as Home};