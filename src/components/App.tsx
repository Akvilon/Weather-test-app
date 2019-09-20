import * as React from 'react';
import styles from './App.style';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Auth } from './Auth';
import {Redirect} from "react-router";
import { default as withStyles, WithStyles } from 'react-jss';
import { WeatherCardDetails } from './WeatherCardDetails';


interface Props {}
interface State {}

class App extends React.PureComponent<Props & WithStyles<typeof styles>, State> {



    render() {
        const { classes } = this.props;
        return (
            <div className={classes.wrapper}>
                <Switch>
                    <Route path={'/'} render={this.renderHome} exact/>
                    <Route path={'/auth'} render={this.renderAuth} />
	                  <Route path={'/details/:id'} render={this.renderDetails} />
                    <Route path={'/404'} render={this.renderNotFound} />
                    <Route  render={this.renderRedirect} />
                </Switch>
            </div>
        )
    }
      private renderHome = (props: RouteComponentProps) => <Home {...props}/>;
		  private renderDetails = (props: RouteComponentProps) => <WeatherCardDetails {...props}/>;
		  private renderAuth = (props: RouteComponentProps) => <Auth {...props}/>;
			private renderNotFound = () => (<div>Not found!</div>);
		  private renderRedirect = () => (<Redirect to='/404' />)
}

const StyledApp = withStyles(styles)(App);
export { StyledApp as App };