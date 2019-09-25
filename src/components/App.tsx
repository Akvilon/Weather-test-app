import * as React from 'react';
import styles from './App.style';
import { Route, Switch } from 'react-router-dom';
import { default as withStyles, WithStyles } from 'react-jss';
import routes, { AppRoute } from './App.routes';
import { v4 as uuid } from 'uuid';

class App extends React.PureComponent<WithStyles<typeof styles>> {

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