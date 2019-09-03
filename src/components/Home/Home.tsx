import * as React from 'react';
import styles from './Home.style';
import {default as withStyles, WithStyles} from 'react-jss';
import {Row} from '../../utils/Row';
import {SearchPanel} from '../SearchPanel';
import {AddItemPanel} from '../AddItemPanel';
import { WeatherList } from '../WeatherList';


class Home extends React.PureComponent<WithStyles<typeof styles>>{
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
								<Row leftPart={this.AddItemPanel()} rightPart={this.SearchPanel()}/>
              </div>
              <WeatherList />
          </>
        );
    };

    private SearchPanel = () => (<SearchPanel />);
    private AddItemPanel = () => (<AddItemPanel />);
}

const StyledHome = withStyles(styles)(Home);
export {StyledHome as Home};