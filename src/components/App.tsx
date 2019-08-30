import * as React from 'react';
import styles from './App.style';
import withStyles, {WithStyles} from "react-jss";
import {Route, RouteComponentProps, Switch} from "react-router";
import {Home} from './Home';
import {Header} from './Header';


class App extends React.PureComponent<WithStyles<typeof styles>> {
  render() {
    const {classes} = this.props;
      return (
          <div className={classes.wrapper}>
              <Header/>
              <Switch>
                  <Route exact path={'/'} render={this.renderHome} />
              </Switch>
          </div>
      );
  }

    private renderHome = (props: RouteComponentProps) => <Home {...props}/>;

}

const StyledApp = withStyles(styles)(App);

export  {StyledApp as App};
