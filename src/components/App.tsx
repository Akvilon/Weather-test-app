import * as React from 'react';
import styles from './App.style';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Auth } from './Auth';
import {Redirect} from "react-router";
import { default as withStyles, WithStyles } from 'react-jss';
import { WeatherCardDetails } from './WeatherCardDetails';
import routes, { AppRoute } from './App.routes';
import { v4 as uuid } from 'uuid';

interface Props {}
interface State {}

class App extends React.PureComponent<Props & WithStyles<typeof styles>, State> {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.wrapper}>
                <Switch>
	                {
	                	routes.map((route: AppRoute)=> <Route key={uuid()} {...route}/>)
	                }
                </Switch>
            </div>
        )
    }
}

const StyledApp = withStyles(styles)(App);
export { StyledApp as App };