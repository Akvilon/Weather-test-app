import * as React from 'react';
import styles from './Home.style';
import {default as withStyles, WithStyles} from "react-jss";
import {Row} from '../../utils/Row';
import {SearchPanel} from '../SearchPanel';
import {AddItemPanel} from '../AddItemPanel';


class Home extends React.PureComponent<WithStyles<typeof styles>>{
    public render() {

        return (
            <div>
                {this.renderHome()}
            </div>
        )
    }

    private renderHome = () => {
        const {classes} = this.props;
        return (
            <div className={classes.homeControls}>
                <Row leftPart={this.AddItemPanel()} rightPart={this.SearchPanel()}/>
            </div>
        )
    };

    private SearchPanel = () => (<SearchPanel />);
    private AddItemPanel = () => (<AddItemPanel />);
}

const StyledHome = withStyles(styles)(Home);
export {StyledHome as Home};